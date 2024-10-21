$(document).ready(function() {
    const quotesListContainer = $('#quotesListContainer');
    const searchForm = $('#searchForm');
    const txtSearch = $('#txtSearch');
    const csrfToken = $('meta[name="csrf-token"]').attr('content');

    async function displayAllQuotes() {
        $.ajax({
            url: '/quotes/all',
            method: 'GET',
            success: function(response) {
                quotesListContainer.html(response);
            },
            error: function(xhr) {
                console.error(xhr.responseText);
            }
        });
    }

    async function getQuote(keyword) {
        $.ajax({
            url: '/quotes/search_result',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
                keyword: keyword,
                _token: csrfToken
            }),
            success: function(response) {
                quotesListContainer.html(response);
            },
            error: function(xhr) {
                console.error(xhr.responseText);
            }
        });
    }

    $(window).on('load', function() {
        async function waitResponse() {
            await displayAllQuotes();
        }

        waitResponse();
    });

    txtSearch.on('keyup', function(e) {
        async function waitResponse() {
            await getQuote(e.target.value);
        }

        waitResponse();
    });

    searchForm.on('submit', function(e) {
        e.preventDefault();

        async function waitResponse() {
            await getQuote(txtSearch.val());
        }

        waitResponse();
    });
});