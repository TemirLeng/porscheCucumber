package Test;


import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin ={"html:target/cucumberHTML-report",
                "json:target/cucumber.json"},
        features = "src/test/java/ulan/resources/testFeatures",
        glue = "ulan/StepDefinitions",
        tags ="@PorscheTest",
        dryRun = false

)
public class Runner {

}
