$(function(){
    $('input[name="birthday"]').persianDatepicker({
        format : 'YYYY/MM/DD',
        autoClose: true
    });
    $(document).on('change' , 'select[name="user-role"]' , function(){
        let that  = $(this);
        switch (that.val()) {
            case 'haghighi':
                $('div.haghighi').addClass('show');
                $('div.hoghooghi').removeClass('show');
                break;
            case 'hoghooghi':
                $('div.hoghooghi').addClass('show');
                $('div.haghighi').removeClass('show');
            default:
                break;
        }
    })
})