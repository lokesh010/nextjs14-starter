export async function handleUnauthorized() {
  await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/api/logout', {
    method: 'POST',
  });
  window.location.href = '/';
}

export async function handleForbidden() {
  await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/api/logout', {
    method: 'POST',
  });
  window.location.href = '/';
}
