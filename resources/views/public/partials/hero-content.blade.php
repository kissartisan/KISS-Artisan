<div class="columns">
    <div class="column">
        <div class="block">
            <div class="title is-spaced">
                <p>Keep it simple,</p>
                <p class="title__keyword">
                    <s>stupid</s> 
                    <span class="artisan-text">
                        artisan
                        <span class="emphasis-dot"></span>
                    </span>
                </p>
            </div>
        </div>
        <div class="block margin-top-medium">
            <div class="buttons">
                <a class="button is-info is-outlined is-rounded is-size-4" href="/contact">
                    <span>Let's jam someday</span>
                </a>
                <a class="button is-primary is-outlined is-rounded is-size-4" href="/contact">
                    <span>Wander around</span>
                </a>
            </div>
        </div>
    </div>
    <div class="column">
        <div class="subtitle">
            <div class="block margin-top-small">
                <type-writer :text="{{ json_encode([
                    "Hi! I'm <strong>Reymark</strong>."
                ]) }}"></type-writer>
            </div>
            <div class="block">
                <type-writer :speed="30" :delay="3000" :text="{{ json_encode([
                    "The <em>[insert-adjective-here]</em> guy who likes to break things down..."
                ]) }}"></type-writer>
            </div>
            <div class="block">
                <type-writer :speed="30" :delay="8000" :text="{{ json_encode([
                    "As simple, as it can be."
                ]) }}"></type-writer>
            </div>
        </div>
    </div>
</div>