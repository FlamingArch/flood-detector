// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  if (req.method === "POST") {
    console.log(`POSTED DATA: ${req.body}`);
    return;
  }
  res.status(200).json({
    size: 2,
    data: [
      {
        latitude: 44,
        longitude: -80,
        class: "flood",
        temperature: 20,
        river: 10,
        elevation: 200,
        weather: "clear sky",
        humidity: 50,
        cloud: 40,
        wind: 5,
      },
      {
        latitude: 44,
        longitude: -80,
        class: "normal",
        temp: 20,
        river: 10,
        elevation: 200,
        weather: "clear sky",
        humidity: 50,
        cloud: 40,
        wind: 5,
      },
    ],
  });
}
