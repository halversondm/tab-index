function myModal() {
    function setControl(isTabable) {
        if (isTabable === undefined || isTabable === null) {
            return;
        }
        var tags = ['input', 'select', 'textarea', 'button'];
        for (var t = 0; t < tags.length; t++) {
            $(tags[t]).each(function (index) {
                // preserve order, if any
                if (isTabable) {
                    $(this).attr('tabindex', $(this).attr('data-index'));
                } else {
                    $(this).attr('data-index', $(this).attr('tabindex'));
                    $(this).attr('tabindex', '-1');
                }
            });
        }
    }

    $('#myModal').on('hide.bs.modal', function (e) {
        setControl(true);
    });
    $('#myModal').on('show.bs.modal', function (e) {
        setControl(false);
    });
}

$(document).ready(myModal());