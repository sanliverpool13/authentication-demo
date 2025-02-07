const originalFetch = window.fetch;

// Mock data
const mockInfo = [
  { email: "test@email.com", password: "12#$ghGH34G" },
  { email: "demo@email.com", password: "14#$ghdH34G" },
  { email: "dummy@email.com", password: "12#$ghFD34G" },
];

window.fetch = async (input: RequestInfo | URL, options = {}) => {
  const { method, body } = options as RequestInit;
  const url = typeof input === "string" ? input : (input as Request).url;

  // Mock login api
  if (url.includes("/api/login") && method === "POST") {
    if (body && typeof body === "string") {
      const { email, password } = JSON.parse(body);

      // Need to check all info to find matching credentials
      for (const data of mockInfo) {
        if (data.email === email && data.password === password) {
          return Promise.resolve(
            new Response(
              JSON.stringify({
                message: "Login successful",
                token: "demo-token",
              }),
              { status: 200, headers: { "Content-Type": "application/json" } },
            ),
          );
        }
      }
    }

    // No matching credentials, login info invalid
    return Promise.resolve(
      new Response(JSON.stringify({ message: "Invalid email or password" }), {
        status: 401,
        headers: { "Content-Type": "application/json" },
      }),
    );
  }

  // Mock sign up
  if (url.includes("api/signup") && method === "POST") {
    if (body && typeof body === "string") {
      const { email, password } = JSON.parse(body);

      if (email && password) {
        return Promise.resolve(
          new Response(JSON.stringify({ message: "Sign-up successful" }), {
            status: 201,
            headers: { "Content-Type": "application/json" },
          }),
        );
      }
      return Promise.resolve(
        new Response(
          JSON.stringify({ message: "Email and password are required" }),
          { status: 400, headers: { "Content-Type": "application/json" } },
        ),
      );
    }
  }

  if (url.includes("/api/reset") && method === "POST") {
    if (body && typeof body === "string") {
      //   const { email } = JSON.parse(body);

      return Promise.resolve(
        new Response(JSON.stringify({ message: "Reset successfull" }), {
          status: 201,
          headers: { "Content-Type": "application/json" },
        }),
      );
    }
  }

  return originalFetch(url, options);
};
