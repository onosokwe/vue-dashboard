<template>
    <div>
        <form >
            <div class="row">
                <div class="col-lg-6 form-group">
                    <label>Select Plan<span>*</span></label>
                    <select class="form-control mb-3">
                        <option>Name of Plan</option>
                    </select>
                </div>
                <div class="col-lg-6 form-group">
                    <label>Select Day <span>*</span></label>
                    <select class="form-control mb-3">
                        <option>Name of Plan</option>
                    </select>
                </div>
                <div class="col-lg-6 form-group">
                    <label>Devotional Topic:</label>
                    <input 
                        type="text" 
                        name="" 
                        class="form-control" 
                        placeholder="Topic of Growth Devotional" 
                    />
                </div>
                <div class="col-lg-6 form-group">
                    <label>Devotional Scripture:</label>
                    <input 
                        type="text" 
                        name="" 
                        class="form-control" 
                        placeholder="Key Scripture of Growth Devotional" 
                    />
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 form-group">
                    <label>Growth Devotional Content</label>
                    <wysiwyg class="bg-white" />
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12 form-group">
                    <input 
                    type="submit" 
                    name="" 
                    class="btn btn-apprv btn-block add" 
                    value="ADD GROWTH DEVOTIONAL" />
                </div>
            </div>
        </form>
    </div>
</template>