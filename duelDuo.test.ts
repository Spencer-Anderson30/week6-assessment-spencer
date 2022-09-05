
import { Builder, Capabilities, By } from "selenium-webdriver"
import { skipPartiallyEmittedExpressions } from "typescript"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Draw button draws a bot', async () => {
    const draw = await driver.findElement(By.id('draw'))
    const displayed = await draw.isDisplayed()
    expect(displayed).toBe(true)
}) 

test('Removed from duo', async () => {
    const botRemove = await driver.findElement(By.id('botRemove'))
    const choices = await botRemove.isDisplayed()
    expect(choices).toBe(true)
})

