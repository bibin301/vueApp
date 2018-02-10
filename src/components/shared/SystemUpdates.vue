<template>
<div class="full_container">
<div class="left note-box">
        <div class="heading"><i class="fa fa-database icon"></i> {{notes}}</div>
        <div align="justify">  
            <div style="width: 100%; font-size:12px; margin: 10px; padding-top: 15px;">
                <table style="color: #ffffff; margin-right: 20px;">
                    <tbody><tr>
                        <td colspan="2"><div style="float: left;"><i class="fa fa-user" aria-hidden="true"></i> {{notesHeading}}</div> <div style="float: right;"><i class="fa fa-calendar" aria-hidden="true"></i> 2016-11-01 10:00:00</div><div style="clear: both;"></div></td>
                    </tr>
                    <tr>
                        <td valign="top"><i class="fa fa-sticky-note-o" aria-hidden="true" style="align: top; padding-top: 10px;"></i></td>
                        <td valign="top"><p style="padding-top: 10px;">Kaleidoscope version 4.0 will be launched soon. The system is expected to be unavailable for approximately 60 seconds. Separate system update notifications will also be sent via e-mail to your system administrator contacts.</p></td>
                    </tr>
                    <tr>
                        <td colspan="2"><div style="width: 100%; border-bottom: 1px solid rgba(255, 255, 255, 0.3); padding-top: 10px;"></div></td>
                    </tr>
                    <tr>
                        <td colspan="2"><div style="float: left;"><i class="fa fa-user" aria-hidden="true"></i> {{notesHeading}}</div> <div style="float: right;"><i class="fa fa-calendar" aria-hidden="true"></i> 2016-05-27 12:30:30</div><div style="clear: both;"></div></td>
                    </tr>
                    <tr>
                        <td valign="top"><i class="fa fa-sticky-note-o" aria-hidden="true" style="align: top; padding-top: 10px;"></i></td>
                        <td valign="top"><p style="padding-top: 10px;">Kaleidoscope version 1.6 will be launched at 06:00GMT on the 1st of June 2016. The system is expected to be unavailable for approximately 30 minutes. Separate system update notifications will also be sent via e-mail to your system administrator contacts.</p></td>
                    </tr>
                    <tr>
                        <td colspan="2"><div style="width: 100%; border-bottom: 1px solid rgba(255, 255, 255, 0.3); padding-top: 10px;"></div></td>
                    </tr>
                </tbody></table>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'TopBar',
  data () {
    return {
      notes: 'System Updates',
      notesHeading: 'SYSADMIN'
    }
  },
  computed: mapGetters({
  }),
  methods: mapActions([]),
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.full_container {
 display: block;
  background: #494949 none repeat scroll 0 0;
  height: 400px;
  width: 45%;
  float: left;
  min-height: calc(100vh - 20%);
  position: relative;
}

.form {
 width: 100%; 
 padding-top: 15px;   
}

.error {
    color: red;
}

.heading {
text-transform: uppercase;
font-size: 14px;
line-height: 22px;
padding: 9px 0;
background: #333333;
color: #ffffff;
padding-left: 15px;
margin-bottom: 5px;
}

.left {
  text-align: left;
  margin-top: 0px;
}

.btn-primary {
  border-radius: 3px;
  background-image: linear-gradient(to bottom,#009688 0,#007a6c 100%);
  background-repeat: repeat-x;
  border: 0 solid;
}

.icon {
  font-size: 18px;
}

.btn-xs {
  font-size: 12px;
  padding: 3px 10px;
}

</style>