<div class="container mt-2">
    <h2 class="text-center mb-4">Quotes</h2>
    <div class="row">
        @forelse ($quotes as $quote)
            <div class="col-md-4 mb-4">
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
                    <p>&times; No Quote/s Found.</p>
                </div>
            </div>
        @endforelse
    </div>
</div>
