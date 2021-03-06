// buildMetadata function called in optionChanged
function buildMetadata(sample) {
    d3.json("./static/js/samples.json").then((data) => {
        var metadata = data.metadata;
        var resultsArray = metadata.filter(sampleObj => sampleObj.id == sample);
        var result = resultsArray[0]; //Because results are returned like an array =[0]
        var PANEL = d3.select("#sample-metadata");

        PANEL.html(""); //Clear content before other id gets called
        PANEL.append("h6").text(`ID: ${result.id}`);
        PANEL.append("h6").text(`Ethnicity: ${result.ethnicity}`);
        PANEL.append("h6").text(`Gender: ${result.gender}`);
        PANEL.append("h6").text(`Age: ${result.age}`);
        PANEL.append("h6").text(`Location: ${result.location}`);
        PANEL.append("h6").text(`BBtype: ${result.bbtype}`);
        PANEL.append("h6").text(`Washing/week: ${result.wfreq}`);
    });
}
