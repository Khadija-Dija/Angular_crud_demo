'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">ng-demo-app2 documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AdminModule.html" data-type="entity-link" >AdminModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AdminModule-580ced1d1f4790412b6a042728911724c99d2de2874370c27f10351041277cd5609bafe33776d3915fbd3cf9759839c884d0e771191aecc2b208528d3cf4d88b"' : 'data-bs-target="#xs-components-links-module-AdminModule-580ced1d1f4790412b6a042728911724c99d2de2874370c27f10351041277cd5609bafe33776d3915fbd3cf9759839c884d0e771191aecc2b208528d3cf4d88b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AdminModule-580ced1d1f4790412b6a042728911724c99d2de2874370c27f10351041277cd5609bafe33776d3915fbd3cf9759839c884d0e771191aecc2b208528d3cf4d88b"' :
                                            'id="xs-components-links-module-AdminModule-580ced1d1f4790412b6a042728911724c99d2de2874370c27f10351041277cd5609bafe33776d3915fbd3cf9759839c884d0e771191aecc2b208528d3cf4d88b"' }>
                                            <li class="link">
                                                <a href="components/AheaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AheaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AlayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AlayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SidemenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SidemenuComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AdminRoutingModule.html" data-type="entity-link" >AdminRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-eb85d44d5b788c479d75193e9d5dd7fbe5790082e720b86a4807334390375745ec534b747b59ae7b3fb7d84a01bd8ec862b275b4cfbba13e9dcbe1a898969dd7"' : 'data-bs-target="#xs-components-links-module-AppModule-eb85d44d5b788c479d75193e9d5dd7fbe5790082e720b86a4807334390375745ec534b747b59ae7b3fb7d84a01bd8ec862b275b4cfbba13e9dcbe1a898969dd7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-eb85d44d5b788c479d75193e9d5dd7fbe5790082e720b86a4807334390375745ec534b747b59ae7b3fb7d84a01bd8ec862b275b4cfbba13e9dcbe1a898969dd7"' :
                                            'id="xs-components-links-module-AppModule-eb85d44d5b788c479d75193e9d5dd7fbe5790082e720b86a4807334390375745ec534b747b59ae7b3fb7d84a01bd8ec862b275b4cfbba13e9dcbe1a898969dd7"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ErrorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ErrorComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AuthModule-445daf467836dadcc30ef471aa5fa3e81004a91596381e63a061eb0785e19e74706e23835848b02d97592868258e125a1e2b6ffdbda0a1da90a82f494a824911"' : 'data-bs-target="#xs-components-links-module-AuthModule-445daf467836dadcc30ef471aa5fa3e81004a91596381e63a061eb0785e19e74706e23835848b02d97592868258e125a1e2b6ffdbda0a1da90a82f494a824911"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthModule-445daf467836dadcc30ef471aa5fa3e81004a91596381e63a061eb0785e19e74706e23835848b02d97592868258e125a1e2b6ffdbda0a1da90a82f494a824911"' :
                                            'id="xs-components-links-module-AuthModule-445daf467836dadcc30ef471aa5fa3e81004a91596381e63a061eb0785e19e74706e23835848b02d97592868258e125a1e2b6ffdbda0a1da90a82f494a824911"' }>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LogoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LogoutComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthRoutingModule.html" data-type="entity-link" >AuthRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ProductModule.html" data-type="entity-link" >ProductModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ProductModule-4061c0d9ccc17d9b28c30197ccfe02eebee965518f441c76ea02c5a2430b606c16847d28c6e807a8f80f8a9b719c8295319ab78ec2346deba9ff7e14d7ee23ae"' : 'data-bs-target="#xs-components-links-module-ProductModule-4061c0d9ccc17d9b28c30197ccfe02eebee965518f441c76ea02c5a2430b606c16847d28c6e807a8f80f8a9b719c8295319ab78ec2346deba9ff7e14d7ee23ae"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProductModule-4061c0d9ccc17d9b28c30197ccfe02eebee965518f441c76ea02c5a2430b606c16847d28c6e807a8f80f8a9b719c8295319ab78ec2346deba9ff7e14d7ee23ae"' :
                                            'id="xs-components-links-module-ProductModule-4061c0d9ccc17d9b28c30197ccfe02eebee965518f441c76ea02c5a2430b606c16847d28c6e807a8f80f8a9b719c8295319ab78ec2346deba9ff7e14d7ee23ae"' }>
                                            <li class="link">
                                                <a href="components/PAddComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PAddComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PDeleteComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PDeleteComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PEditComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PIndexComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PIndexComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProductRoutingModule.html" data-type="entity-link" >ProductRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PublicModule.html" data-type="entity-link" >PublicModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-PublicModule-3966fffa938789e215d4681efda91ad91d1506f2915c12e228da0aec992f02c339c22da8652e40905c035632215698f0fcec4ae28077e0374956b1d7522e0137"' : 'data-bs-target="#xs-components-links-module-PublicModule-3966fffa938789e215d4681efda91ad91d1506f2915c12e228da0aec992f02c339c22da8652e40905c035632215698f0fcec4ae28077e0374956b1d7522e0137"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PublicModule-3966fffa938789e215d4681efda91ad91d1506f2915c12e228da0aec992f02c339c22da8652e40905c035632215698f0fcec4ae28077e0374956b1d7522e0137"' :
                                            'id="xs-components-links-module-PublicModule-3966fffa938789e215d4681efda91ad91d1506f2915c12e228da0aec992f02c339c22da8652e40905c035632215698f0fcec4ae28077e0374956b1d7522e0137"' }>
                                            <li class="link">
                                                <a href="components/ContactComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContactComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PheaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PheaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PlayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PlayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PublicRoutingModule.html" data-type="entity-link" >PublicRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-UserModule-f0ad5a6e16a4eadc3a4c16730ff32d5f7089a930ba7e89ec0b5e5a04627a43238c9a5aef031cecd620e2b7f0c3dd13fe79822099d795383995456528a4b0cfe9"' : 'data-bs-target="#xs-components-links-module-UserModule-f0ad5a6e16a4eadc3a4c16730ff32d5f7089a930ba7e89ec0b5e5a04627a43238c9a5aef031cecd620e2b7f0c3dd13fe79822099d795383995456528a4b0cfe9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UserModule-f0ad5a6e16a4eadc3a4c16730ff32d5f7089a930ba7e89ec0b5e5a04627a43238c9a5aef031cecd620e2b7f0c3dd13fe79822099d795383995456528a4b0cfe9"' :
                                            'id="xs-components-links-module-UserModule-f0ad5a6e16a4eadc3a4c16730ff32d5f7089a930ba7e89ec0b5e5a04627a43238c9a5aef031cecd620e2b7f0c3dd13fe79822099d795383995456528a4b0cfe9"' }>
                                            <li class="link">
                                                <a href="components/UAddComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UAddComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UDeleteComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UDeleteComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UEditComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UIndexComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UIndexComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserRoutingModule.html" data-type="entity-link" >UserRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#components-links"' :
                            'data-bs-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/HomeComponent.html" data-type="entity-link" >HomeComponent</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/ApiErrorService.html" data-type="entity-link" >ApiErrorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductService.html" data-type="entity-link" >ProductService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TokenService.html" data-type="entity-link" >TokenService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interceptors-links"' :
                            'data-bs-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/TokenInterceptor.html" data-type="entity-link" >TokenInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/IApi.html" data-type="entity-link" >IApi</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICredential.html" data-type="entity-link" >ICredential</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IDataProduct.html" data-type="entity-link" >IDataProduct</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IDataUser.html" data-type="entity-link" >IDataUser</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IProduct.html" data-type="entity-link" >IProduct</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ISingleProduct.html" data-type="entity-link" >ISingleProduct</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ISingleUser.html" data-type="entity-link" >ISingleUser</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IToken.html" data-type="entity-link" >IToken</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ITokenUser.html" data-type="entity-link" >ITokenUser</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUser.html" data-type="entity-link" >IUser</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});