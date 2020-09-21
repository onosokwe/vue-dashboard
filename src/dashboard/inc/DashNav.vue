<template>
    <nav class="navbar navbar-expand-sm dashnav fixed-top">
        <div class="container-fluid">
            <router-link 
                class="navbar-brand" 
                to="/dashboard">
                <i class="fa fa-bars"></i> Faithora
            </router-link>
            <button 
                class="navbar-toggler navbar-toggler-right" 
                data-toggle="collapse" 
                data-target="#navbarResponsive" 
                aria-controls="navbarResponsive">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav nav-mylinks">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/dashboard">
                            <i class="fa fa-home"></i>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/devotionals">
                            <i class="fa fa-bars"></i>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/growth-plans">
                            <i class="fa fa-bar-chart"></i>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/watch">
                            <i class="fa fa-tv"></i>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/store">
                            <i class="fa fa-shopping-cart"></i>
                        </router-link>
                    </li>
                </ul>
                <ul class="navbar-nav nav-buttons">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/profile">
                            <i class="fas fa-user-circle"></i>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/settings">
                            <i class="fas fa-cog"></i>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">
                            <i class="fas fa-power-off"></i>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped>
    .dashnav {
        border-bottom: 1px solid #aaa;
        box-shadow: 0 1px 1px rgba(0,0,0,0.3);
        background: #ffffff;
        padding: 8px 20px;
        font-family: 'Barlow', Helvetica, sans-serif;
    }
    .navbar-brand {
        color:#202020;
        outline:none;
    }
    .navbar-brand i {
        margin-right: 10px;
        color: #65676b;
    }
    .navbar-nav {
        margin: 0 auto;
        padding: 3px 0;
    }
    .navbar-nav .nav-item {
        margin: 0 10px;
    }
    .navbar-nav a i {
        font-size: 20px;
        margin: 0;
        padding: 0;
        text-align: center;
        line-height: normal;
    }
    .nav-mylinks a {
        padding: 8px 12px;
        min-width: 80px;
        text-align: center;
        background: #f5f5f5; 
        color:#65676b; 
        border-bottom: 3px solid #1877f2;
    }
    .nav-buttons {
        margin: 0; 
    }
    .nav-buttons a {
        border-radius: 50%;
        color:#65676b; 
        width: 40px;
        height: 40px;
        text-align: center;
    }
    .navbar-nav a:focus, .navbar-nav a:hover{
        outline: none;
        color: #1877f2;
        background: #e9e9e9;
    }
</style>