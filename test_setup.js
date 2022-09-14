require('chromedriver');

const {By} = require('selenium-webdriver');
var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder()
  .forBrowser('chrome')
  .build();
// driver.get('https://google.com');


try {
  // const targetUrl = process.env.DRIVER_URL;
  // export DRIVER_URL=https://radialhub.com/ && node test_setup.js
  driver.get("https://expertdrivingschool96.com/");
  // driver.get(targetUrl);

  setTimeout(() => {
    driver.findElement(By.css("a[href='#services']")).click();
  }, 3000);

  setTimeout(() => {
    driver.findElement(By.css("a[href='#about']")).click();
  }, 5000);

  
  // // driver.wait(3000);

  // driver.findElement(By.css("a[href='#about']")).click();
  // // driver.sleep(3000);

  // driver.findElement(By.css("a[href='#contact']")).click();
  // // driver.sleep(3000);

  // driver.findElement(By.css("a[href='#team']")).click();
  // // driver.sleep(3000);

  // driver.findElement(By.css("a[href='#hero']")).click();
  // driver.sleep(3000);

} finally {
  // driver.close();
  // driver.quit();
}
