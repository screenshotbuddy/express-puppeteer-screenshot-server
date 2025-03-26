import express from "express"
import puppeteer from "puppeteer"


const app = express()


app.get("/screenshot", async (req, res) => {
  let browser
  try {
    // Launch a Chromium browser instance
    browser = await puppeteer.launch({
      headless: true, // running with headless mode
      args: ["--no-sandbox", "--disable-setuid-sandbox"], // minimal arguments required to start headless browser
    })

    // Create a new page in the browser
    const page = await browser.newPage()

    // Navigate to the specified URL
    await page.goto(req.query.url)

    // Take a screenshot of the current page you can set type 'png' | 'jpeg' | 'webp'
    const buffer = await page.screenshot({ type: "png" })

    // Set the content type for the response set correct header based on type you set above
    res.setHeader("Content-Type", "image/png")

    // Send the screenshot as a response
    res.send(Buffer.from(buffer))
  } catch (error) {
    console.error("Error taking screenshot:", error)
    res.status(500).send("Internal Server Error")
  } finally {
    // Close the browser instance
    await browser.close()
  }
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
