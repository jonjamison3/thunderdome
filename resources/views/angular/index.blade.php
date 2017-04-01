
<meta name="_token" content="{{ csrf_token() }}">

<script>
	history.pushState(null, "", location.href.split("?")[0]);
    $momfig = {
		@if (isset($url_path))
			urlPath: {!! $url_path !!} 
		@else 
			urlPath: ''
		@endif
	};

	console.info($momfig); 
</script>
<?php

	include(public_path().'/dome/dist/index.html');

?>

