<template>
    <div>
        <form >
            <div class="row">
                <div class="col-lg-4 form-group">
                    <label>Devotional Date <span>*</span></label>
                    <input 
                        type="date" 
                        required
                        name="" 
                        class="form-control" 
                        placeholder="devotinal date" 
                    />
                </div>
                <div class="col-lg-4 form-group">
                    <label>Devotional Title <span>*</span></label>
                    <input 
                        type="text" 
                        required 
                        name="" 
                        class="form-control" 
                        placeholder="Devotional Title"
                    />
                </div>
                <div class="col-lg-4 form-group">
                    <label>Devotional Scripture Verses:</label>
                    <input 
                        type="text" 
                        name="" 
                        class="form-control" 
                        placeholder="Devotional Scripture Verses" 
                    />
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 form-group">
                    <label>Devotional Content</label>
                    <wysiwyg class="bg-white" />
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12 form-group">
                    <input 
                    type="submit" 
                    name="" 
                    class="btn btn-apprv btn-block add" 
                    value="ADD DEVOTIONAL" />
                </div>
            </div>
        </form>
    </div>
</template>