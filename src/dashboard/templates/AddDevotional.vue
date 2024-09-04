<template>
    <div>
        <DashNav />
        <section id="pagecontent">
            <DashSide />
            <div class="main_crumb">
                <router-link to="/dashboard">Home</router-link>
                <span>/</span>
                <router-link to="/devotionals">Devotionals</router-link>
            </div>
            <div class="main_body">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="main_lord">
                                <router-link 
                                    to="/devotionals" 
                                    class="btn pull-right btn-primary">LIST DEVOTIONALS
                                </router-link>
                                <h1>Add Daily Devotional Content</h1>
                                <AddDevotionalForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>

</style>

<script>
import DashNav from '../inc/DashNav'
import DashSide from '../inc/DashSide'
import AddDevotionalForm from '../forms/AddDevotionalForm'

export default {
	components: {
        DashNav,
        DashSide,
        AddDevotionalForm
	}
}
</script>
