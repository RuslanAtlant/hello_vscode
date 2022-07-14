let move_array = [];
let move_objects = document.querySelectorAll('[data-move]');
if (move_objects.length > 0) {
	for (let index = 0; index < move_objects.length; index++) {
		let el = move_objects[index];
		let data_move = el.getAttribute('data-move');
		if (data_move != '' || data_move != null) {
			el.setAttribute('data-move-index', index);
			move_array[index] = {
				'parent': el.parentNode,
				"index": index_in_parent(el)
			};
		}
	}
}
