import { apiRoute } from 'astro';

export const prerender = false;

export const get: apiRoute = ({}) => {
  return new Response(JSON.stringify({
    success: true,
    message: 'GET /api/hello3 works!'
  }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
};

export const post: apiRoute = async ({ request }) => {
    try {
      const body = await request.json();
      return new Response(JSON.stringify({
        success: true,
        message: 'POST /api/hello3 works!',
        data: body
      }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    } catch (error) {
      return new Response(JSON.stringify({
        success: false,
        error: 'Invalid request body'
      }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }
  };