import fairviewLogo from '/src/assets/images/fairview.svg'

export default function Header() {
    return (
        <header class="header">
            <a class="logo-link" href="https://www.mhealthfairview.org/resources/for-medical-professionals" target="_blank">
                <img class="logo animate" src={fairviewLogo} alt="Fairview logo" />
            </a>
            <h1 class="hdg hdg--1">Farview + Jen</h1>
            <h2 class="hdg hdg--2">Flex Cards Challenge</h2>
        </header>
    )
}