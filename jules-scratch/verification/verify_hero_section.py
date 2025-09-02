from playwright.sync_api import sync_playwright, expect

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page()
    page.set_viewport_size({"width": 375, "height": 812})
    page.goto("http://localhost:8080/")
    heading = page.get_by_role("heading", name="Sustainable Insect Protein for Animal Feed")
    expect(heading).to_be_visible()
    page.screenshot(path="jules-scratch/verification/verification.png")
    browser.close()
