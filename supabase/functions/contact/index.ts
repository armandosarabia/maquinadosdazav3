import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { MailerLite } from 'npm:@mailerlite/mailerlite-nodejs';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const mailerLite = new MailerLite({
  api_key: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiZGZlZTIzYTc2ZjRmN2FhNmU3OTNiMjEwNzk1Y2JhNWM0NDc2MjkxODVhODVjYjQwMDY2Zjc5Y2RjOTQ1ZDFhOTc0NDZhNTczNzhiMzBiZDkiLCJpYXQiOjE3NDc0NTYwODUuNTg4NTk1LCJuYmYiOjE3NDc0NTYwODUuNTg4NTk3LCJleHAiOjQ5MDMxMjk2ODUuNTgyMjksInN1YiI6IjEzNzM1MjUiLCJzY29wZXMiOltdfQ.sUn1mjP9dQzmxOA8HFbhEywA2muMEU3ao_h8YhP6zfuTfi0QrSHPdDDddMuIzN1iMGf2zQI0rROeqh_UhvLj5OwGigNg6vQ09Jbks47UfUHJZpA0gRYUktQnovkd8qPskNMeWxRio9ylB_Y98jntTsLqa9prnORdfsr9E9AyHPWFB5TtZOXr131Br7KpKXdEzkqliQtYLJfQl7z3pyTx3It3ipjz9MO75V7DqQB0PctF48ggPlzatgL7UgBG2RzVkLsKiLwWM1UoN2UY_MU8noc__kg5ZcPt4ivjOP4xEmAPv8nSedgyU05VtzwXsB1o9qJv42ZJDJs-_WsYi8WTuQ1AKJzy4o_0lRfu6EtwV_K4iuM8yRIaiczhfXjtLIEVo-qYsd41Xd50_EmCdKFNjc0yRimhMWr2sVKTXW1gjx9bfOMICcYjBElyspGirKHULdFIXhxQUjIfDvPOZBh7skW4OxJU01W_OplQ0yCtIVZWKZa9sD0gPRy7ZOnJNUJ46phOpRk0fH_EK2vm9Yimz8xsu8FdKCb6drNNjHPoXSfch9IwWLdwKOJD259e-FkZd5nLuIQAdLl_eldWN2p0OUoU0ZljPrMYDECKln7E1KNkfqO9dYWveB8u-RGD_oU9tXw-kn-PlOtL9XYwqbsj060_T3JIYeg77m7MHGoN6Ug'
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
        <p><strong>Suscrito al newsletter:</strong> ${newsletter ? 'Sí' : 'No'}</p>
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
          groups: ['all'], // Add to default group
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