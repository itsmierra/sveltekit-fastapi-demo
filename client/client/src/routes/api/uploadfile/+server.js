export async function POST({ request }) {
  let body = Object.fromEntries(await request.formData());
  console.log(body)

  const formData = new FormData();
  formData.append("file", body.file);
  
  const response = await fetch("http://localhost:8000/uploadfile", {
    method: "POST",
    body: formData,
    headers: {}
  });
  if (response.status !== 200) {
    throw new Error("Failed to upload file");
  }
  return response.json();
}
