$(document).ready(function() {
    const quotesListContainer = $('#quotesListContainer');
    const searchForm = $('#search-form');
    const txtInput = $('#txtInput');
    const csrfToken = $('meta[name="csrf-token"]').attr('content');

    async function displayQuotes() {
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

    $(window).on('load', async function() {
        await displayQuotes();
    });

    searchForm.submit(async function(e) {
        e.preventDefault();
        await getQuote(txtInput.val());
    });
});