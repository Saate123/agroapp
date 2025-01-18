jQuery(window).ready(function () 
{
  jQuery('li.pm_menu_show_profile_image').each(function()
 {
   
	if (jQuery(this).find('img')!= null)
        {
			jQuery(this).find('a').first().prepend(jQuery(this).find('img'));
        }
     
 });
  

});