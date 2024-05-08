export async function GET(request: Request) {
  return new Response("Api is Live!", {
    status: 200,
  });
}
