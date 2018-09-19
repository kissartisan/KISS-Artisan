<nav class="navbar is-transparent">
    <div class="navbar-brand">
        <a class="navbar-item" href="https://kissartisan.com">
          <img src="{{ asset('img/Laravel.png') }}" alt="Branding">
        </a>
    </div>
    <div class="navbar-menu" id="navMenu">
        <div class="navbar-end">
            <div class="navbar-item">
                <navigation inline-template>
                    <div id="navigation" class="navigation">
                        <input id="navi-toggle" type="checkbox" class="navigation__checkbox">
                        <label @click="toggle(toggleState)" id="navigation__button" for="navi-toggle" class="navigation__button">
                            <span class="navigation__icon"></span>
                        </label>
                        <div id="navigation__background" class="navigation__background">&nbsp;</div>

                        <nav class="navigation__nav">
                            <ul class="navigation__list">
                                <li class="navigation__item">
                                    <a href="#" class="navigation__link">
                                        <span>01</span> About Natours
                                    </a>
                                </li>
                                <li class="navigation__item">
                                    <a href="#" class="navigation__link">
                                        <span>02</span> Your benefits
                                    </a>
                                </li>
                                <li class="navigation__item">
                                    <a href="#" class="navigation__link">
                                        <span>03</span> Popular tours
                                    </a>
                                </li>
                                <li class="navigation__item">
                                    <a href="#" class="navigation__link">
                                        <span>04</span> Stories
                                    </a>
                                </li>
                                <li class="navigation__item">
                                    <a href="#" class="navigation__link">
                                        <span>05</span> Book now
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </navigation>
            </div>
        </div>
    </div>
</nav>