import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { MailerLite } from 'npm:@mailerlite/mailerlite-nodejs';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const mailerLite = new MailerLite({
  api_key: Deno.env.get('MAILERLITE_API_KEY') || '',
});

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, company, message, newsletter } = await req.json();

    // Send contact form data to email
    const emailParams = {
      subject: 'Nuevo contacto desde el sitio web',
      from: 'noreply@maquinadosdaza.com.mx',
      to: ['contacto@maquinadosdaza.com.mx'],
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone}</p>
        <p><strong>Empresa:</strong> ${company}</p>
        <p><strong>Mensaje:</strong> ${message}</p>
      `,
    };

    // If user subscribed to newsletter, add to MailerLite
    if (newsletter) {
      try {
        await mailerLite.subscribers.createOrUpdate({
          email: email,
          fields: {
            name: name,
            company: company,
            phone: phone,
          },
          status: 'active',
        });
      } catch (error) {
        console.error('Error adding subscriber to MailerLite:', error);
      }
    }

    return new Response(
      JSON.stringify({ message: 'Mensaje enviado correctamente' }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    );
  } catch (error) {
    console.error('Error:', error);
    return new Response(
      JSON.stringify({ error: 'Error al procesar la solicitud' }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    );
  }
});