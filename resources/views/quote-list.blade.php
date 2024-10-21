<div class="container-fluid mt-2">
    <h2 class="text-center mb-4">Quotes</h2>
    <div class="row">
        @forelse ($quotes as $quote)
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                <div class="card shadow-sm h-100">
                    <div class="card-body">
                        <p class="quote card-text">{{ $quote['quote'] }}</p>
                        <p class="author text-muted card-text">— {{ $quote['author'] }}</p>
                    </div>
                </div>
            </div>
        @empty
            <div class="col-12">
                <div class="alert alert-warning text-center" role="alert">
                    <p>No Quote/s Found.</p>
                </div>
            </div>
        @endforelse
    </div>
</div>
