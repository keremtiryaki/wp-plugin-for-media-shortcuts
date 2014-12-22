jQuery(function($) {
    $(document).ready(function(){
		$('#insert-my-itunes').click(itunesStore);
		$('#insert-my-android').click(androidStore);
		$('#insert-my-win').click(winStore);
    });
 
    function itunesStore() {
		var url = prompt("Please enter itunes store url", "");

		if (url != null) {
			wp.media.editor.insert(
				"<a href='"+url+"' target='_blank'>"+
					"<img src='/wp-content/plugins/add-media-shortcut-for-stores/images/store-apple.jpg'>"+
				"</a>"
			);
		}
    }
	
    function winStore() {
		var url = prompt("Please enter windows store url", "");

		if (url != null) {
			wp.media.editor.insert(
				"<a href='"+url+"' target='_blank'>"+
					"<img src='/wp-content/plugins/add-media-shortcut-for-stores/images/store-windows.jpg'>"+
				"</a>"
			);
		}
    }
	
    function androidStore() {
		var url = prompt("Please enter playstore url", "");

		if (url != null) {
			wp.media.editor.insert(
				"<a href='"+url+"' target='_blank'>"+
					"<img src='/wp-content/plugins/add-media-shortcut-for-stores/images/store-google.jpg'>"+
				"</a>"
			);
		}
    }
});