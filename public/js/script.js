$(document).ready(function() {
    const quotesListContainer = $('#quotesListContainer');
    const searchForm = $('#search-form');
    const txtInput = $('#txtInput');
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

    searchForm.submit(function(e) {
        async function waitResponse() {
            await getQuote(txtInput.val());
        }

        e.preventDefault();
        waitResponse();
    });
});