from playwright.sync_api import Page, expect
import pytest

@pytest.fixture(scope="session")
def browser_context_args(browser_context_args):
    return {
        **browser_context_args,
        "ignore_https_errors": True,
    }

def test_font_verification(page: Page):
    # 1. Arrange: Go to the homepage.
    page.goto("http://localhost:8080")

    # 2. Wait for the page to load by looking for a specific element.
    #    Using a more specific locator than the title for robustness.
    expect(page.get_by_role("heading", name="Sustainable Insect Protein for Animal Feed")).to_be_visible(timeout=10000)

    # 3. Wait for animations to complete
    page.wait_for_timeout(2000)

    # 4. Screenshot: Capture the final result for visual verification.
    page.screenshot(path="jules-scratch/verification/verification.png")
