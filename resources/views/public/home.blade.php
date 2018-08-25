@extends('layouts.public')

@section('content')
    <section class="section hero">
        <div class="container">
            <div class="hero__navigation">
                @include('public.partials.navigation')
            </div>

            <div class="hero__content">
                @include('public.partials.hero-content')
            </div>
        </div>
        <div class="hero__animator has-text-centered">
            <a href="#" class="scroll-down" address="true"></a>
        </div>
    </section>
    <section class="life">
        <life-pie></life-pie>
    </section>
@endsection