var cardElement = `
    <div class="card-item">
        <a class="card-audit" href="{{% URL %}}"><img class="card-audited" src="{{% AUDIT_URL %}}" />
        </a>
        <div>
        <img class="card-image" height="260" src="{{% IMAGE_URL %}}" />
        </div>
        <h6 class="card-price">{{% PRICE %}} / month</h6>
        <h3><a class="card-city" href="{{% URL %}}">{{% TITLE %}}</a></h3>
        <div>
        <i aria-hidden="true" class="far fa-eye"></i>
        <span class="card-views">Consulted {{% NBR_OF_VIEWS %}} times</span>
        </div>

        <div>
        <i aria-hidden="true" class="far fa-folder-open"></i>
        <span class="card-category">{{% CATEGORY %}}</span>
        </div>

        <div class="card-info">
        <div class="info-item">
            <span>
            <svg x="0px" y="0px" viewBox="0 0 100 100" style="enable-background: new 0 0 100 100" xml:space="preserve"
                width="50">
                <g>
                <path
                    d="M3.6,75.7h3.6V7.3l85.7-0.1v85.3l-16.7-0.1l0-16.7c0-0.9-0.4-1.9-1-2.5c-0.7-0.7-1.6-1-2.5-1h-69V75.7h3.6                            H3.6v3.6H69L69,96c0,2,1.6,3.6,3.6,3.6l23.8,0.1c1,0,1.9-0.4,2.5-1c0.7-0.7,1-1.6,1-2.5V3.6c0-1-0.4-1.9-1-2.5                            c-0.7-0.7-1.6-1-2.5-1L3.6,0.1C1.6,0.2,0,1.7,0,3.7v72c0,0.9,0.4,1.9,1,2.5c0.7,0.7,1.6,1,2.5,1V75.7z">
                </path>
                <path
                    d="M38.1,76.9v-9.5c0-1.3-1.1-2.4-2.4-2.4c-1.3,0-2.4,1.1-2.4,2.4v9.5c0,1.3,1.1,2.4,2.4,2.4                            C37,79.3,38.1,78.2,38.1,76.9">
                </path>
                <path
                    d="M38.1,50.7V15c0-1.3-1.1-2.4-2.4-2.4c-1.3,0-2.4,1.1-2.4,2.4v35.7c0,1.3,1.1,2.4,2.4,2.4                            C37,53.1,38.1,52.1,38.1,50.7">
                </path>
                <path
                    d="M2.4,38.8h33.3c1.3,0,2.4-1.1,2.4-2.4c0-1.3-1.1-2.4-2.4-2.4H2.4c-1.3,0-2.4,1.1-2.4,2.4                            C0,37.8,1.1,38.8,2.4,38.8">
                </path>
                <path
                    d="M35.7,46h31c1.3,0,2.4-1.1,2.4-2.4c0-1.3-1.1-2.4-2.4-2.4h-31c-1.3,0-2.4,1.1-2.4,2.4                            C33.3,44.9,34.4,46,35.7,46">
                </path>
                <path
                    d="M78.6,46h16.7c1.3,0,2.4-1.1,2.4-2.4c0-1.3-1.1-2.4-2.4-2.4H78.6c-1.3,0-2.4,1.1-2.4,2.4                            C76.2,44.9,77.3,46,78.6,46">
                </path>
                <path
                    d="M78.6,46h16.7c1.3,0,2.4-1.1,2.4-2.4c0-1.3-1.1-2.4-2.4-2.4H78.6c-1.3,0-2.4,1.1-2.4,2.4                            C76.2,44.9,77.3,46,78.6,46">
                </path>
                <path
                    d="M81,43.6v-7.1c0-1.3-1.1-2.4-2.4-2.4c-1.3,0-2.4,1.1-2.4,2.4v7.1c0,1.3,1.1,2.4,2.4,2.4                            C79.9,46,81,44.9,81,43.6">
                </path>
                <path
                    d="M81,43.6v-7.1c0-1.3-1.1-2.4-2.4-2.4c-1.3,0-2.4,1.1-2.4,2.4v7.1c0,1.3,1.1,2.4,2.4,2.4                            C79.9,46,81,44.9,81,43.6">
                </path>
                </g>
            </svg>
            </span>
            <h3 class="card-surface">{{% SURFACE %}} m²</h3>
        </div>

        <div class="info-item">
            <span>
            <i aria-hidden="true" class="fas fa-street-view"></i>
            </span>
            <h3 class="card-distance">{{% DISTANCE %}}</h3>
        </div>

        <div class="info-item">
            <span>
            <i aria-hidden="true" class="fas fa-bed"></i>
            </span>
            <h3 class="card-bed">{{% NBR_OF_BEDS %}}</h3>
        </div>

        <div class="info-item">
            <span>
            <i aria-hidden="true" class="fas fa-bath"></i>
            </span>
            <h3 class="card-shower">{{% SHOWER %}}</h3>
        </div>
        </div>

        <div class="card-stars">
        </div>
    </div>
`;
