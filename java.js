function searchJobs() {

    let job = document.getElementById("jobSearch").value;
    let location = document.getElementById("locationSearch").value;

    if (job === "" && location === "") {

        alert("Please enter a job or location.");

        return;
    }

    localStorage.setItem("searchJob", job);
    localStorage.setItem("searchLocation", location);

    window.location.href = "jobs.html";
}


function filterJobs() {

    let jobSearch =
        document.getElementById("jobSearch").value.toLowerCase();

    let locationSearch =
        document.getElementById("locationSearch").value.toLowerCase();

    let jobs =
        document.querySelectorAll(".job-card");

    let found = false;


    jobs.forEach(function(job) {

        let jobText =
            job.innerText.toLowerCase();


        if (
            jobText.includes(jobSearch) &&
            jobText.includes(locationSearch)
        ) {

            job.style.display = "block";

            found = true;

        } else {

            job.style.display = "none";

        }

    });


    if (!found) {

        document.getElementById("searchMessage").innerText =
            "❌ No jobs found. Try another search.";

    } else {

        document.getElementById("searchMessage").innerText =
            "✅ Jobs matching your search:";

    }
}


function viewJob(jobName) {

    alert(
        "You selected: " + jobName +
        "\n\nJob details will be available here soon."
    );

}