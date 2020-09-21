<template>
    <div>
        <form >
            <div class="row">
                <div class="col-lg-6 form-group">
                    <label>Event Name / Title: <span>*</span></label>
                    <input 
                        type="text" 
                        required 
                        name="" 
                        class="form-control" 
                        placeholder="Event Name / Title"
                    />
                </div>
                <div class="col-lg-6 form-group">
                    <label>Event Venue: <span>*</span></label>
                    <input 
                        type="text" 
                        required 
                        name="" 
                        class="form-control" 
                        placeholder="Event Venue"
                    />
                </div>
                <div class="col-lg-6 form-group">
                    <label>Event Start Date: <span>*</span></label>
                    <input 
                        type="date" 
                        required
                        name="" 
                        class="form-control" 
                    />
                </div>
                <div class="col-lg-6 form-group">
                    <label>Event End Date: <span>*</span></label>
                    <input 
                        type="date" 
                        required
                        name="" 
                        class="form-control"  
                    />
                </div>
                <div class="col-lg-6 form-group">
                    <label>Event Flier:</label>
                    <input 
                        type="file" 
                        name="" 
                        class="form-control" 
                        placeholder="Event Flier" 
                    />
                </div>
                <div class="col-lg-6 form-group">
                    <label>Event Registration Link:</label>
                    <input 
                        type="url" 
                        name="" 
                        class="form-control" 
                        placeholder="Event Registration Link" 
                    />
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 form-group">
                    <label>Event Description: <span>*</span></label>
                    <wysiwyg class="bg-white" />
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12 form-group">
                    <input 
                    type="submit" 
                    name="" 
                    class="btn btn-apprv btn-block add" 
                    value="POST EVENT" />
                </div>
            </div>
        </form>
    </div>
</template>