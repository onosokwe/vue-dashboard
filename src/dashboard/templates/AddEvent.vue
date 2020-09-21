<template>
    <div>
        <DashNav />
        <section id="pagecontent">
            <DashSide />
            <div class="main_crumb">
                <router-link to="/dashboard">Home</router-link>
                <span>/</span>
                <router-link to="/add-event">Add News and Events</router-link>
            </div>
            <div class="main_body">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="main_lord">
                                <router-link 
                                    to="/events" 
                                    class="btn pull-right btn-primary">LIST EVENTS
                                </router-link>
                                <h1>Add News and Events</h1>
                                <AddEventForm />
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
import AddEventForm from '../forms/AddEventForm'

export default {
	components: {
        DashNav,
        DashSide,
        AddEventForm
	}
}
</script>
