"use server";

export async function loginAction(state: any, formData: FormData) {
  const userId = formData.get("user_id");
  const password = formData.get("password");
  console.log(userId, password);
  return {
    message: "OK",
  };
}
