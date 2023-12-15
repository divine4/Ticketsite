function redirectToTicketPage() {
    const movieChoice = document.getElementById("movieChoice").value;

    // Select movie choice and redirect to the appropriate ticket page
        if (movieChoice === "1") {
            window.location.href = "ticket_oppenheimer.html";
        } else if (movieChoice === "2") {
            window.location.href = "ticket_barbie.html";
        } else {
            // if Invalid movie selection, redirect to an error page
            window.location.href = "other.html";
        }
    }
    
