package kyial.test;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"html:target/cucumberHTML-report",
                "json:target/cucumber.json"},
        features = "src/test/resources/testFeatures/porscheTest.feature",
        glue = "kyial/steps",
        tags = "@Hi",

        dryRun = false
)


public class PorscheRunner {

}
