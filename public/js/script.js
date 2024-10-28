$(document).ready(function () {
    const quotesListContainer = $("#quotesListContainer");
    const searchForm = $("#searchForm");
    const txtSearch = $("#txtSearch");
    const csrfToken = $('meta[name="csrf-token"]').attr("content");

    const waitResponse = async (callback) => await callback();

    async function displayAllQuotes() {
        $.ajax({
            url: "/quotes/all",
            method: "GET",
            success: function (response) {
                quotesListContainer.html(response);
            },
            error: function (xhr) {
                console.error(xhr.responseText);
            },
        });
    }

    async function getQuote(keyword) {
        $.ajax({
            url: '/quotes/search_result',
            method: 'POST',
            data: {
                keyword: keyword,
                _token: csrfToken,
            },
            success: function(response) {
                quotesListContainer.html(response);
            },
            error: function (xhr) {
                console.error(xhr.responseText);
            },
        });
    }

    $(window).on('load', function() {
        waitResponse(function() {
            displayAllQuotes();
        });
    });

    txtSearch.on('keyup', function(e) {
        waitResponse(function() {
            getQuote(e.target.value);
        });
    });

    searchForm.on("submit", function (e) {
        e.preventDefault();
        waitResponse(function() {
            getQuote(txtSearch.val());
        });
    });
});
