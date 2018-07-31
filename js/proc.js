$("#NoSyncTSLabel").hide(),
    $("#NoSyncTS").hide(),
    $("#DispatchSpecTempLabel").hide(),
    $("#DispatchSpecTempNotes").hide(),
    $("#TSOutputDispatchLabel").hide(),
    $("#EmailTSLabel").hide(),
    $("#EmailTS").hide(),
    $("#WalledGTSLabel").hide(),
    $("#WalledGardenTS").hide(),
    $("#PPPInfo").hide(),
    $("#CnBLabel").hide(),
    $("#CnBTS").hide(),
    $("#INRSyncTSLabel").hide(),
    $("#INRSyncTS").hide(),
    $("#INRRouteTSLabel").hide(),
    $("#INRRouteTS").hide(),
    $("#FreqDiscoTSLabel").hide(),
    $("#FreqDiscoTS").hide(),
    $("#SlowSpeedsTSLabel").hide(),
    $("#SlowSpeedsTS").hide(),
    $("#SpeedsInfo").hide(),
    $("#NoRouteDSLLabel").hide(),
    $("#NoRouteDSLTS").hide(),
    $("#NoRouteFiberLabel").hide(),
    $("#NoRouteFiberTS").hide(),
    $("#NoEthLightTSLabel").hide(),
    $("#NoEthLightTS").hide(),
    $("#TSOutputModemReplaceLabel").hide(),
    $("#ModemReplaceSpecTempLabel").hide(),
    $("#ModemReplaceSpecTempNotes").hide(),
    $("#NoPowerLightTSLabel").hide(),
    $("#NoPowerLightTS").hide(),
    $("#WirelessTSLabel").hide(),
    $("#WirelessTS").hide(),
    $("#OOSTSLabel").hide(),
    $("#OOSTS").hide(),
    $("#OtherTSLabel").hide(),
    $("#OtherTS").hide(),
    $("#ExtraInfoOutLabel").hide(),
    $("#EmailTRApprovedBy").hide(),
    $("#EmailTRApprovedByLabel").hide(),
    $("#WiFiInfoLabel").hide(),
    $("#LightStatusLabel").hide(),
    $("#tsHiding").hide(),
    $("#dispatchHiding").hide(),
    $("#modemReplacementHiding").hide();

$(document).ready(function() {

    $("#ExtraInfoTSLabel").hide();
    $("#ExtraInfoTS").hide();
});


$("#billnum").bind("keypress", function(a) {
    var b = new RegExp("^[0-9]{0,10}$"),
        c = String.fromCharCode(a.charCode ? a.charCode : a.which);
    if (!b.test(c))
        return a.preventDefault(), !1
}),
    $("#contnum").bind("keypress", function(a) {
        var b = new RegExp("^[0-9]{0,10}$"),
            c = String.fromCharCode(a.charCode ? a.charCode : a.which);
        if (!b.test(c))
            return a.preventDefault(), !1
    }),
    $("#callername").bind("keypress", function(a) {
        var b = new RegExp("^[a-zA-Z ]*$"),
            c = String.fromCharCode(a.charCode ? a.charCode : a.which);
        if (!b.test(c))
            return a.preventDefault(), !1
    }),
    $("#SlowSpeedsDLAvg").bind("keypress", function(a) {
        var b = new RegExp("^[0-9.]*$"),
            c = String.fromCharCode(a.charCode ? a.charCode : a.which);
        if (!b.test(c))
            return a.preventDefault(), !1
    }),
    $("#SlowSpeedsULAvg").bind("keypress", function(a) {
        var b = new RegExp("^[0-9.]*$"),
            c = String.fromCharCode(a.charCode ? a.charCode : a.which);
        if (!b.test(c))
            return a.preventDefault(), !1
    }),
    $("#dispFullName").bind("keypress", function(a) {
        var b = new RegExp("^[a-zA-Z ]*$"),
            c = String.fromCharCode(a.charCode ? a.charCode : a.which);
        if (!b.test(c))
            return a.preventDefault(), !1
    }),
    $("#dispBTN").bind("keypress", function(a) {
        var b = new RegExp("^[0-9]{0,10}$"),
            c = String.fromCharCode(a.charCode ? a.charCode : a.which);
        if (!b.test(c))
            return a.preventDefault(), !1
    }),
    $("#dispCTN").bind("keypress", function(a) {
        var b = new RegExp("^[0-9]{0,10}$"),
            c = String.fromCharCode(a.charCode ? a.charCode : a.which);
        if (!b.test(c))
            return a.preventDefault(), !1
    }),
    $("#dispADDR").bind("keypress", function(a) {
        var b = new RegExp("^[0-9a-zA-Z. ]{0,10}$"),
            c = String.fromCharCode(a.charCode ? a.charCode : a.which);
        if (!b.test(c))
            return a.preventDefault(), !1
    }),
    $("#callername").on("change keyup paste", function() {
        $("#output").children("#tt").text($(this).val())
    }),
    $("#billnum").on("change keyup paste", function() {
        $("#output").children("#btn").text($(this).val())
    }),
    $("#contnum").on("change keyup paste", function() {
        $("#output").children("#cbn").text($(this).val())
    }),
    $("#verificationSelect").change(function() {
        $("#output").children("#veri").text($(this).val())
    }),
    $("#emailNPS").on("change keyup paste", function() {
        $("#output").children("#emailAddy").text($(this).val())
    }),
    //Dispatch Information Fields

    $("#dispCTN").on("change keyup paste", function() {
        $("#output").children("#TSOutputDispatchLabel").children('#TSOutputDispatchLabelHidden').children("#dispCTNOut").text($(this).val())
    }),
    $("#dispTicketNumber").on("change keyup paste", function() {
        $("#output").children("#TSOutputDispatchLabel").children('#TSOutputDispatchLabelHidden').children("#dispTicketNumberOut").text($(this).val())
    }),
    $("#dispApprovedBy").on("change keyup paste", function() {
        $("#output").children("#TSOutputDispatchLabel").children('#TSOutputDispatchLabelHidden').children("#dispApprovalOut").text($(this).val())
    }),
    $("#dispCommit").on("change keyup paste", function() {
        $("#output").children("#TSOutputDispatchLabel").children('#TSOutputDispatchLabelHidden').children("#dispCommitOut").text($(this).val())
    }),
    //Email TR Info

    $("#EmailTRApprovedBy").on("change keyup paste", function() {
        $("#emailTRApprovalLabel").children("#EmailTRApprovedByLabelHidden").children("#EmailTRApprovedByOut").text($(this).val())
    }),
    //Walled Garden PPP Info

    $("#WalledPPPun").on("change keyup paste", function() {
        $("#output").children("#gardenPPPLabel").children("#PPPInfoHidden").children("#PPPUserOut").text($(this).val())
    }),
    $("#WalledPPPpass").on("change keyup paste", function() {
        $("#output").children("#gardenPPPLabel").children("#PPPInfoHidden").children("#PPPpassOut").text($(this).val())
    }),
    //Slow Speeds Info

    $("#SlowSpeedsProvSpeed").on("change keyup paste", function() {
        $("#output").children("#speedInfoLabel").children("#SpeedsInfoHidden").children("#SpeedsInfoProvOut").text($(this).val())
    }),
    $("#SlowSpeedsDLAvg").on("change keyup paste", function() {
        $("#output").children("#speedInfoLabel").children("#SpeedsInfoHidden").children("#SpeedsInfoDLOut").text($(this).val())
    }),
    $("#SlowSpeedsULAvg").on("change keyup paste", function() {
        $("#output").children("#speedInfoLabel").children("#SpeedsInfoHidden").children("#SpeedsInfoULOut").text($(this).val())
    }),
    //No Bras PPP Info
    $("#NoRouteDSLPPPun").on("change keyup paste", function() {
        $("#output").children("#gardenPPPLabel").children("#PPPInfoHidden").children("#PPPUserOut").text($(this).val())
    }),
    $("#NoRouteDSLPPPpass").on("change keyup paste", function() {
        $("#output").children("#gardenPPPLabel").children("#PPPInfoHidden").children("#PPPpassOut").text($(this).val())
    }),
    //Wireless TS Info
    $("#WiFiSSID").on("change keyup paste", function() {
        $("#output").children("#wirelessLabel").children("#WiFiInfoLabelHidden").children("#WiFiInfoSSIDOut").text($(this).val())
    }),
    $("#WiFiPass").on("change keyup paste", function() {
        $("#output").children("#wirelessLabel").children("#WiFiInfoLabelHidden").children("#WiFiInfoPassOut").text($(this).val())
    }),
    $("#WiFiENCType").on("change keyup paste", function() {
        $("#output").children("#wirelessLabel").children("#WiFiInfoLabelHidden").children("#WiFiENCTypeOut").text($(this).val())
    }),
    $("#WiFiChannel").on("change keyup paste", function() {
        $("#output").children("#wirelessLabel").children("#WiFiInfoLabelHidden").children("#WiFiChannelOut").text($(this).val())
    }),
    //Modem Replacement Info
    $("#ModemReplaceApprovedBy").on("change keyup paste", function() {
        $("#output").children("#TSOutputModemReplaceLabel").children("#TSOutputModemReplaceLabelHidden").children("#ModemReplaceApprovalOut").text($(this).val())
    }),
    $("#ModemReplaceM6Number").on("change keyup paste", function() {
        $("#output").children("#TSOutputModemReplaceLabel").children("#TSOutputModemReplaceLabelHidden").children("#ModemReplaceM6Out").text($(this).val())
    }),
    $("#ModemReplaceSID").on("change keyup paste", function() {
        $("#output").children("#TSOutputModemReplaceLabel").children("#ModemReplaceSIDOut").text($(this).val())
    }),
    $("#ModemReplaceADDR").on("change keyup paste", function() {
        $("#output").children("#TSOutputModemReplaceLabel").children("#ModemReplaceADDROut").text($(this).val())
    }),
    //Modem Selector
    $("#primModemSelection").change(function() {
        $("#output").children("#primModemOut").text($(this).val())
    }),
    //Out of Scope Issue Info
    $("#OOSIssueDesc").on("change keyup paste", function() {
        $("#output").children("#oosDescriptionLabel").children("#oosHidden").children("#oosIssDesc").text($(this).val())
    }),
    //Other Issue Info
    $("#otherIssueDesc").on("change keyup paste", function() {
        $("#output").children("#otherDescriptionLabel").children("#otherHidden").children("#otherIssDesc").text($(this).val())
    }),
    $("#otherTSDesc").on("change keyup paste", function() {
        $("#output").children("#otherDescriptionLabel").children("#otherHidden").children("#otherIssTS").text($(this).val())
    }),
    //Modem Lights Info
    $("#ModemLightsInput").on("change keyup paste", function() {
        $(this).val() ? ($("#LightStatusLabel").show(),
            $("#output").children("#LightStatusLabel").children("#LightStatusesOut").text($(this).val())) : $("#LightStatusLabel").hide()
    }),
    //Issues Checkboxes
    $("#IssueColumns input").change(function() {
        this.checked ? $("#output").children("#issueFromBox").append("<span id=" + $(this).attr("id") + ">" + $(this).val() + "</span>") : $('span[id="' + $(this).attr("id") + '"]').remove(),
            $("#NoSync").is(":checked") ? ($("#NoSyncTSLabel").show(),
                $("#NoSyncTS").show()) : ($("#NoSyncTSLabel").hide(),
                $("#NoSyncTS").hide(),
                $("#DispatchSpecTempLabel").hide(),
                $("#NoSyncDispatch").prop('checked', false),
                $("#tsHiding").append($("#TSOutputDispatchLabelHidden")),
                $("#TSOutputSec").empty(),
                $("#DispatchSpecTempNotes").hide()),
            $("#Email").is(":checked") ? ($("#EmailTSLabel").show(),
                $("#EmailTS").show()) : ($("#EmailTSLabel").hide(),
                $("#EmailTS").hide()),
            $("#EmailCompTRSubmit").prop('checked', false),
            $("#tsHiding").append($("#EmailTRApprovedByLabelHidden")),
            $("#ConNoBrow").is(":checked") ? ($("#CnBLabel").show(),
                $("#CnBTS").show()) : ($("#CnBLabel").hide(),
                $("#CnBTS").hide()),
            $("#INRSync").is(":checked") ? ($("#INRSyncTSLabel").show(),
                $("#INRSyncTS").show()) : ($("#INRSyncTSLabel").hide(),
                $("#INRSyncTS").hide()),
            $("#INRRoute").is(":checked") ? ($("#INRRouteTSLabel").show(),
                $("#INRRouteTS").show()) : ($("#INRRouteTSLabel").hide(),
                $("#INRRouteTS").hide()),
            $("#FreqDisco").is(":checked") ? ($("#FreqDiscoTSLabel").show(),
                $("#FreqDiscoTS").show()) : ($("#FreqDiscoTSLabel").hide(),
                $("#FreqDiscoTS").hide()),
            $("#FreqDiscoDispatch").prop('checked', false),
            $("#tsHiding").append($("#TSOutputDispatchLabelHidden")),
            $("#TSOutputSec").empty(),
            /*$("#SlowSpeeds").is(":checked") ? ($("#SlowSpeedsTSLabel").show(),
                $("#SlowSpeedsTS").show(),
                $("#speedInfoLabel").append($("#SpeedsInfoHidden")).show()) : ($("#SlowSpeedsTSLabel").hide(),
                $("#SlowSpeedsTS").hide(),
                $("#speedInfoLabel").hide()),
                */
            $("#NoRouteDSL").is(":checked") ? ($("#NoRouteDSLLabel").show(),
                $("#NoRouteDSLTS").show(),
                $("#gardenPPPLabel").append($("#PPPInfoHidden")).show()) : ($("#NoRouteDSLLabel").hide(),
                $("#NoRouteDSLTS").hide(),
                $("#gardenPPPLabel").hide()),
            $("#NoRouteDSLDispatch").prop('checked', false),
            $("#tsHiding").append($("#TSOutputDispatchLabelHidden")),
            $("#TSOutputSec").empty(),
            $("#NoRouteFiber").is(":checked") ? ($("#NoRouteFiberLabel").show(),
                $("#NoRouteFiberTS").show()) : ($("#NoRouteFiberLabel").hide(),
                $("#NoRouteFiberTS").hide()),
            $("#NoELight").is(":checked") ? ($("#NoEthLightTSLabel").show(),
                $("#NoEthLightTS").show()) : ($("#NoEthLightTSLabel").hide(),
                $("#NoEthLightTS").hide(),
                $("#ModemReplaceSpecTempLabel").hide(),
                $("#NoEthLightModemReplace").prop('checked', false),
                $("#ModemReplaceSpecTempNotes").hide()),
            $("#BadModem").is(":checked") ? ($("#NoPowerLightTSLabel").show(),
                $("#NoPowerLightTS").show()) : ($("#NoPowerLightTSLabel").hide(),
                $("#NoPowerLightModemReplace").prop('checked', false),
                $("#NoPowerLightToggle").prop('checked', false),
                $("#NoPowerLightReseat").prop('checked', false),
                $("#NoPowerLightAltOutlet").prop('checked', false),
                $("#NoPowerLightTS").hide()),
            /*$("#Wireless").is(":checked") ? ($("#WirelessTSLabel").show(),
                $("#WirelessTS").show(),
                $("#wirelessLabel").append($("#WiFiInfoLabelHidden")).show()) : ($("#WirelessTSLabel").hide(),
                $("#WirelessTS").hide(),
                $("#wirelessLabel").hide()), */
            $("#OutdatedCPE").is(":checked") ? ($("#ModemReplaceSpecTempLabel").show(),
                $("#ModemReplaceSpecTempNotes").show(),
                $("#TSOutputModemReplaceLabel").append($("#TSOutputModemReplaceLabelHidden")).show()) : ($("#ModemReplaceSpecTempLabel").hide(),
                $("#ModemReplaceSpecTempNotes").hide(),
                $("#tsHiding").append($("#TSOutputModemReplaceLabelHidden")),
                $("#TSOutputModemReplaceLabel").hide()),
            $("#OutOfScope").is(":checked") ? ($("#OOSTSLabel").show(),
                $("#OOSTS").show(),
                $("#oosDescriptionLabel").append($("#oosHidden")).show()) : ($("#OOSTSLabel").hide(),
                $("#OOSTS").hide(),
                $("#tsHiding").append($("#oosHidden")),
                $("#oosDescriptionLabel").hide()),
            $("#Other").is(":checked") ? ($("#OtherTSLabel").show(),
                $("#OtherTS").show(),
                $("#otherDescriptionLabel").append($("#otherHidden")).show()) : ($("#OtherTSLabel").hide(),
                $("#OtherTS").hide(),
                $("#otherDescriptionLabel").empty())
    }),
    //Account Status Selector
    $("#AccntActiveCheck input").change(function() {
        this.checked ? $("#output").children("#isActive").append("<span id=" + $(this).attr("id") + ">" + $(this).val() + "</span>") : $('span[id="' + $(this).attr("id") + '"]').remove()
    }),
    //Walled Garden Issue Populator
    $("#WalledGarden").change(function() {
        $("#WalledGarden").prop("checked") ? ($("#WalledGTSLabel").show(),
            $("#WalledGardenTS").show(),
            $("#gardenPPPLabel").append($("#PPPInfoHidden")).show()) : ($("#WalledGTSLabel").hide(),
            $("#WalledGardenTS").hide(),
            $("#tsHiding").append($("#PPPInfoHidden")),
            $("#WalledGardenDispatch").prop('checked', false),
            $("#tsHiding").append($("#TSOutputDispatchLabelHidden")),
            $("#TSOutputSec").empty(),
            //$("#gardenPPPLabel").remove($("#PPPInfoHidden")).hide())
            $("#gardenPPPLabel").hide())
    }),
    //Slow Speeds Issue Populator
    $("#SlowSpeeds").change(function() {
        $("#SlowSpeeds").prop("checked") ? ($("#SlowSpeedsTSLabel").show(),
            $("#SlowSpeedsTS").show(),
            $("#speedInfoLabel").append($("#SpeedsInfoHidden")).show()) : ($("#SlowSpeedsTSLabel").hide(),
            $("#SlowSpeedsTS").hide(),
            $("#tsHiding").append($("#SpeedsInfoHidden")),
            $("#SlowSpeedsDispatch").prop('checked', false),
            $("#tsHiding").append($("#TSOutputDispatchLabelHidden")),
            $("#TSOutputSec").empty(),
            //$("#speedInfoLabel").remove($("#SpeedsInfoHidden")).hide())
            $("#speedInfoLabel").hide())
    }),
    //Wireless Issue Populator
    $("#Wireless").change(function() {
        $("#Wireless").prop("checked") ? ($("#WirelessTSLabel").show(),
            $("#WirelessTS").show(),
            $("#wirelessLabel").append($("#WiFiInfoLabelHidden")).show()) : ($("#WirelessTSLabel").hide(),
            $("#WirelessTS").hide(),
            $("#tsHiding").append($("#WiFiInfoLabelHidden")),
            //$("#wirelessLabel").remove($("#WiFiInfoLabelHidden")).hide())
            $("#wirelessLabel").hide())
    }),
    //No Sync Issue Checkboxes
    $("#NoSyncDialTone").change(function() {
        $("#NoSyncDialTone").prop("checked") ? $("#output").children("#TSOutputLabel").children("#TSOutputSec").append("<span id=" + $(this).attr("id") + ">" + $(this).val() + "</span>") : $('span[id="' + $(this).attr("id") + '"]').remove()
    }),
    $("#NoSyncModemLoc").change(function() {
        $("#NoSyncModemLoc").prop("checked") ? $("#output").children("#TSOutputLabel").children("#TSOutputSec").append("<span id=" + $(this).attr("id") + ">" + $(this).val() + "</span>") : $('span[id="' + $(this).attr("id") + '"]').remove()
    }),
    $("#NoSyncFilterPlace").change(function() {
        $("#NoSyncFilterPlace").prop("checked") ? $("#output").children("#TSOutputLabel").children("#TSOutputSec").append("<span id=" + $(this).attr("id") + ">" + $(this).val() + "</span>") : $('span[id="' + $(this).attr("id") + '"]').remove()
    }),
    $("#NoSyncReseatCable").change(function() {
        $("#NoSyncReseatCable").prop("checked") ? $("#output").children("#TSOutputLabel").children("#TSOutputSec").append("<span id=" + $(this).attr("id") + ">" + $(this).val() + "</span>") : $('span[id="' + $(this).attr("id") + '"]').remove()
    }),
    $("#NoSyncPowerC").change(function() {
        $("#NoSyncPowerC").prop("checked") ? $("#output").children("#TSOutputLabel").children("#TSOutputSec").append("<span id=" + $(this).attr("id") + ">" + $(this).val() + "</span>") : $('span[id="' + $(this).attr("id") + '"]').remove()
    }),
    $("#NoSyncCabLen").change(function() {
        $("#NoSyncCabLen").prop("checked") ? $("#output").children("#TSOutputLabel").children("#TSOutputSec").append("<span id=" + $(this).attr("id") + ">" + $(this).val() + "</span>") : $('span[id="' + $(this).attr("id") + '"]').remove()
    }),
    $("#NoSyncLoopCare").change(function() {
        $("#NoSyncLoopCare").prop("checked") ? $("#output").children("#TSOutputLabel").children("#TSOutputSec").append("<span id=" + $(this).attr("id") + ">" + $(this).val() + "</span>") : $('span[id="' + $(this).attr("id") + '"]').remove()
    }),
    $("#NoSyncRadius").change(function() {
        $("#NoSyncRadius").prop("checked") ? $("#output").children("#TSOutputLabel").children("#TSOutputSec").append("<span id=" + $(this).attr("id") + ">" + $(this).val() + "</span>") : $('span[id="' + $(this).attr("id") + '"]').remove()
    }),
    //No Sync Dispatch Populator
    $("#NoSyncDispatch").change(function() {
        $("#NoSyncDispatch").prop("checked") ? ($("#output").children("#TSOutputLabel").children("#TSOutputSec").append("<span id=" + $(this).attr("id") + ">" + $(this).val() + "</span>"),
            $("#DispatchSpecTempLabel").show(),
            $("#DispatchSpecTempNotes").show(),
            $("#TSOutputDispatchLabel").append($("#TSOutputDispatchLabelHidden")).show()) : ($('span[id="' + $(this).attr("id") + '"]').remove(),
            $("#DispatchSpecTempLabel").hide(),
            $("#DispatchSpecTempNotes").hide(),
            $("#tsHiding").append($("#TSOutputDispatchLabelHidden")),
            //$("#TSOutputDispatchLabel").remove($("#TSOutputDispatchLabelHidden")).hide())
            $("#TSOutputDispatchLabel").hide())
    }),
    //Email Issue Checkboxes
    $("#EmailCompAVScan").change(function() {
        $("#EmailCompAVScan").prop("checked") ? $("#output").children("#TSOutputLabel").children("#TSOutputSec").append("<span id=" + $(this).attr("id") + ">" + $(this).val() + "</span>") : $('span[id="' + $(this).attr("id") + '"]').remove()
    }),
    $("#EmailCompChangePass").change(function() {
        $("#EmailCompChangePass").prop("checked") ? $("#output").children("#TSOutputLabel").children("#TSOutputSec").append("<span id=" + $(this).attr("id") + ">" + $(this).val() + "</span>") : $('span[id="' + $(this).attr("id") + '"]').remove()
    }),
    //Email TR Populator
    $("#EmailCompTRSubmit").change(function() {
        $("#EmailCompTRSubmit").prop("checked") ? ($("#output").children("#TSOutputLabel").children("#TSOutputSec").append("<span id=" + $(this).attr("id") + ">" + $(this).val() + "</span>"),
            $("#EmailTRApprovedBy").show(),
            $("#emailTRApprovalLabel").append($("#EmailTRApprovedByLabelHidden")).show()) : ($('span[id="' + $(this).attr("id") + '"]').remove(),
            $("#EmailTRApprovedBy").hide(),
            $("#tsHiding").append($("#EmailTRApprovedByLabelHidden")),
            $("#EmailTRApprovedByLabel").hide())
    }),
    $("#SRCheckedConn").change(function() {
        $("#SRCheckedConn").prop("checked") ? $("#output").children("#TSOutputLabel").children("#TSOutputSec").append("<span id=" + $(this).attr("id") + ">" + $(this).val() + "</span>") : $('span[id="' + $(this).attr("id") + '"]').remove()
    }),
    $("#SRTestEmail").change(function() {
        $("#SRTestEmail").prop("checked") ? $("#output").children("#TSOutputLabel").children("#TSOutputSec").append("<span id=" + $(this).attr("id") + ">" + $(this).val() + "</span>") : $('span[id="' + $(this).attr("id") + '"]').remove()
    }),
    $("#SRClientSet").change(function() {
        $("#SRClientSet").prop("checked") ? $("#output").children("#TSOutputLabel").children("#TSOutputSec").append("<span id=" + $(this).attr("id") + ">" + $(this).val() + "</span>") : $('span[id="' + $(this).attr("id") + '"]').remove()
    }),
    $("#SRRefer").change(function() {
        $("#SRRefer").prop("checked") ? $("#output").children("#TSOutputLabel").children("#TSOutputSec").append("<span id=" + $(this).attr("id") + ">" + $(this).val() + "</span>") : $('span[id="' + $(this).attr("id") + '"]').remove()
    }),
    //Walled Garden Issue Checkboxes
    $("#WalledAccntStatus").change(function() {
        $("#WalledAccntStatus").prop("checked") ? $("#output").children("#TSOutputLabel").children("#TSOutputSec").append("<span id=" + $(this).attr("id") + ">" + $(this).val() + "</span>") : $('span[id="' + $(this).attr("id") + '"]').remove()
    }),
    $("#WalledPowerC").change(function() {
        $("#WalledPowerC").prop("checked") ? $("#output").children("#TSOutputLabel").children("#TSOutputSec").append("<span id=" + $(this).attr("id") + ">" + $(this).val() + "</span>") : $('span[id="' + $(this).attr("id") + '"]').remove()
    }),
    $("#WalledPPUpdateandPC").change(function() {
        $("#WalledPPUpdateandPC").prop("checked") ? $("#output").children("#TSOutputLabel").children("#TSOutputSec").append("<span id=" + $(this).attr("id") + ">" + $(this).val() + "</span>") : $('span[id="' + $(this).attr("id") + '"]').remove()
    }),
    $("#WalledChangePass").change(function() {
        $("#WalledChangePass").prop("checked") ? $("#output").children("#TSOutputLabel").children("#TSOutputSec").append("<span id=" + $(this).attr("id") + ">" + $(this).val() + "</span>") : $('span[id="' + $(this).attr("id") + '"]').remove()
    }),
    $("#WalledPPPandPC").change(function() {
        $("#WalledPPPandPC").prop("checked") ? $("#output").children("#TSOutputLabel").children("#TSOutputSec").append("<span id=" + $(this).attr("id") + ">" + $(this).val() + "</span>") : $('span[id="' + $(this).attr("id") + '"]').remove()
    }),
    //Walled Garden Dispatch Populator
    $("#WalledDispatch").change(function() {
        $("#WalledDispatch").prop("checked") ? ($("#output").children("#TSOutputLabel").children("#TSOutputSec").append("<span id=" + $(this).attr("id") + ">" + $(this).val() + "</span>"),
            $("#DispatchSpecTempLabel").show(),
            $("#DispatchSpecTempNotes").show(),
            $("#TSOutputDispatchLabel").append($("#TSOutputDispatchLabelHidden")).show()) : ($('span[id="' + $(this).attr("id") + '"]').remove(),
            $("#DispatchSpecTempLabel").hide(),
            $("#DispatchSpecTempNotes").hide(),
            $("#tsHiding").append($("#TSOutputDispatchLabelHidden")),
            //$("#TSOutputDispatchLabel").remove($("#TSOutputDispatchLabelHidden")).hide())
            $("#TSOutputDispatchLabel").hide())
    }),
    //Connect No Browse Issue Checkboxes
    $("#CnBCheckWiFiConn").change(function() {
        $("#CnBCheckWiFiConn").prop("checked") ? $("#output").children("#TSOutputLabel").children("#TSOutputSec").append("<span id=" + $(this).attr("id") + ">" + $(this).val() + "</span>") : $('span[id="' + $(this).attr("id") + '"]').remove()
    }),
    $("#CnBCheckEthConn").change(function() {
        $("#CnBCheckEthConn").prop("checked") ? $("#output").children("#TSOutputLabel").children("#TSOutputSec").append("<span id=" + $(this).attr("id") + ">" + $(this).val() + "</span>") : $('span[id="' + $(this).attr("id") + '"]').remove()
    }),
    $("#CnBPowerC").change(function() {
        $("#CnBPowerC").prop("checked") ? $("#output").children("#TSOutputLabel").children("#TSOutputSec").append("<span id=" + $(this).attr("id") + ">" + $(this).val() + "</span>") : $('span[id="' + $(this).attr("id") + '"]').remove()
    }),
    $("#CnBRestartDev").change(function() {
        $("#CnBRestartDev").prop("checked") ? $("#output").children("#TSOutputLabel").children("#TSOutputSec").append("<span id=" + $(this).attr("id") + ">" + $(this).val() + "</span>") : $('span[id="' + $(this).attr("id") + '"]').remove()
    }),
    $("#CnBUpdatePPP").change(function() {
        $("#CnBUpdatePPP").prop("checked") ? $("#output").children("#TSOutputLabel").children("#TSOutputSec").append("<span id=" + $(this).attr("id") + ">" + $(this).val() + "</span>") : $('span[id="' + $(this).attr("id") + '"]').remove()
    }),
    $("#CnBValidIP").change(function() {
        $("#CnBValidIP").prop("checked") ? $("#output").children("#TSOutputLabel").children("#TSOutputSec").append("<span id=" + $(this).attr("id") + ">" + $(this).val() + "</span>") : $('span[id="' + $(this).attr("id") + '"]').remove()
    }),
    $("#CnBSpecdIP").change(function() {
        $("#CnBSpecdIP").prop("checked") ? $("#output").children("#TSOutputLabel").children("#TSOutputSec").append("<span id=" + $(this).attr("id") + ">" + $(this).val() + "</span>") : $('span[id="' + $(this).attr("id") + '"]').remove()
    }),
    $("#CnBResetTCP").change(function() {
        $("#CnBResetTCP").prop("checked") ? $("#output").children("#TSOutputLabel").children("#TSOutputSec").append("<span id=" + $(this).attr("id") + ">" + $(this).val() + "</span>") : $('span[id="' + $(this).attr("id") + '"]').remove()
    }),
    $("#CnBCheckedPL").change(function() {
        $("#CnBCheckedPL").prop("checked") ? $("#output").children("#TSOutputLabel").children("#TSOutputSec").append("<span id=" + $(this).attr("id") + ">" + $(this).val() + "</span>") : $('span[id="' + $(this).attr("id") + '"]').remove()
    }),
    $("#CnBFoundPL").change(function() {
        $("#CnBFoundPL").prop("checked") ? $("#output").children("#TSOutputLabel").children("#TSOutputSec").append("<span id=" + $(this).attr("id") + ">" + $(this).val() + "</span>") : $('span[id="' + $(this).attr("id") + '"]').remove()
    }),
    $("#CnBSpecDNS").change(function() {
        $("#CnBSpecDNS").prop("checked") ? $("#output").children("#TSOutputLabel").children("#TSOutputSec").append("<span id=" + $(this).attr("id") + ">" + $(this).val() + "</span>") : $('span[id="' + $(this).attr("id") + '"]').remove()
    }),
    $("#CnBAVFW").change(function() {
        $("#CnBAVFW").prop("checked") ? $("#output").children("#TSOutputLabel").children("#TSOutputSec").append("<span id=" + $(this).attr("id") + ">" + $(this).val() + "</span>") : $('span[id="' + $(this).attr("id") + '"]').remove()
    }),
    $("#CnBdisProxy").change(function() {
        $("#CnBdisProxy").prop("checked") ? $("#output").children("#TSOutputLabel").children("#TSOutputSec").append("<span id=" + $(this).attr("id") + ">" + $(this).val() + "</span>") : $('span[id="' + $(this).attr("id") + '"]').remove()
    }),
    $("#CnBClearCache").change(function() {
        $("#CnBClearCache").prop("checked") ? $("#output").children("#TSOutputLabel").children("#TSOutputSec").append("<span id=" + $(this).attr("id") + ">" + $(this).val() + "</span>") : $('span[id="' + $(this).attr("id") + '"]').remove()
    }),
    /* Not DSL Related, due for removal
    $("#INRSyncFilterPlace").change(function() {
        $("#INRSyncFilterPlace").prop("checked") ? $("#output").children("#TSOutputLabel").children("#TSOutputSec").append("<span id=" + $(this).attr("id") + ">" + $(this).val() + "</span>") : $('span[id="' + $(this).attr("id") + '"]').remove()
    }),
    $("#INRSyncCheckStatic").change(function() {
        $("#INRSyncCheckStatic").prop("checked") ? $("#output").children("#TSOutputLabel").children("#TSOutputSec").append("<span id=" + $(this).attr("id") + ">" + $(this).val() + "</span>") : $('span[id="' + $(this).attr("id") + '"]').remove()
    }),
    $("#INRSyncFoundStatic").change(function() {
        $("#INRSyncFoundStatic").prop("checked") ? $("#output").children("#TSOutputLabel").children("#TSOutputSec").append("<span id=" + $(this).attr("id") + ">" + $(this).val() + "</span>") : $('span[id="' + $(this).attr("id") + '"]').remove()
    }),
    $("#INRSyncReferCS").change(function() {
        $("#INRSyncReferCS").prop("checked") ? $("#output").children("#TSOutputLabel").children("#TSOutputSec").append("<span id=" + $(this).attr("id") + ">" + $(this).val() + "</span>") : $('span[id="' + $(this).attr("id") + '"]').remove()
    }),
    $("#INRSyncDispatch").change(function() {
        $("#INRSyncDispatch").prop("checked") ? ($("#output").children("#TSOutputLabel").children("#TSOutputSec").append("<span id=" + $(this).attr("id") + ">" + $(this).val() + "</span>"),
            $("#DispatchSpecTempLabel").show(),
            $("#DispatchSpecTempNotes").show(),
            $("#TSOutputDispatchLabel").append($("#TSOutputDispatchLabelHidden")).show()) : ($('span[id="' + $(this).attr("id") + '"]').remove(),
            $("#DispatchSpecTempLabel").hide(),
            $("#DispatchSpecTempNotes").hide(),
            $("#tsHiding").append($("#TSOutputDispatchLabelHidden")),
            //$("#TSOutputDispatchLabel").remove($("#TSOutputDispatchLabelHidden")).hide())
            $("#TSOutputDispatchLabel").hide())
    }),
    $("#INRRoutePPPUpdate").change(function() {
        $("#INRRoutePPPUpdate").prop("checked") ? $("#output").children("#TSOutputLabel").children("#TSOutputSec").append("<span id=" + $(this).attr("id") + ">" + $(this).val() + "</span>") : $('span[id="' + $(this).attr("id") + '"]').remove()
    }),
    $("#INRRouteDispatch").change(function() {
        $("#INRRouteDispatch").prop("checked") ? ($("#output").children("#TSOutputLabel").children("#TSOutputSec").append("<span id=" + $(this).attr("id") + ">" + $(this).val() + "</span>"),
            $("#DispatchSpecTempLabel").show(),
            $("#DispatchSpecTempNotes").show(),
            $("#TSOutputDispatchLabel").append($("#TSOutputDispatchLabelHidden")).show()) : ($('span[id="' + $(this).attr("id") + '"]').remove(),
            $("#DispatchSpecTempLabel").hide(),
            $("#DispatchSpecTempNotes").hide(),
            $("#tsHiding").append($("#TSOutputDispatchLabelHidden")),
            //$("#TSOutputDispatchLabel").remove($("#TSOutputDispatchLabelHidden")).hide())
            $("#TSOutputDispatchLabel").hide())
    }), End of Non-DSL marked for removal */
    //Frequent Disco's Issue Checkboxes
    $("#FreqDiscoAOHD").change(function() {
        $("#FreqDiscoAOHD").prop("checked") ? $("#output").children("#TSOutputLabel").children("#TSOutputSec").append("<span id=" + $(this).attr("id") + ">" + $(this).val() + "</span>") : $('span[id="' + $(this).attr("id") + '"]').remove()
    }),
    $("#FreqDiscoNewDevices").change(function() {
        $("#FreqDiscoNewDevices").prop("checked") ? $("#output").children("#TSOutputLabel").children("#TSOutputSec").append("<span id=" + $(this).attr("id") + ">" + $(this).val() + "</span>") : $('span[id="' + $(this).attr("id") + '"]').remove()
    }),
    $("#FreqDiscoFilterPlace").change(function() {
        $("#FreqDiscoFilterPlace").prop("checked") ? $("#output").children("#TSOutputLabel").children("#TSOutputSec").append("<span id=" + $(this).attr("id") + ">" + $(this).val() + "</span>") : $('span[id="' + $(this).attr("id") + '"]').remove()
    }),
    $("#FreqDiscoCabLen").change(function() {
        $("#FreqDiscoCabLen").prop("checked") ? $("#output").children("#TSOutputLabel").children("#TSOutputSec").append("<span id=" + $(this).attr("id") + ">" + $(this).val() + "</span>") : $('span[id="' + $(this).attr("id") + '"]').remove()
    }),
    $("#FreqDiscoRadius").change(function() {
        $("#FreqDiscoRadius").prop("checked") ? $("#output").children("#TSOutputLabel").children("#TSOutputSec").append("<span id=" + $(this).attr("id") + ">" + $(this).val() + "</span>") : $('span[id="' + $(this).attr("id") + '"]').remove()
    }),
    $("#FreqDiscoLoopCare").change(function() {
        $("#FreqDiscoLoopCare").prop("checked") ? $("#output").children("#TSOutputLabel").children("#TSOutputSec").append("<span id=" + $(this).attr("id") + ">" + $(this).val() + "</span>") : $('span[id="' + $(this).attr("id") + '"]').remove()
    }),
    //Frequent Disco's Dispatch Populator
    $("#FreqDiscoDispatch").change(function() {
        $("#FreqDiscoDispatch").prop("checked") ? ($("#output").children("#TSOutputLabel").children("#TSOutputSec").append("<span id=" + $(this).attr("id") + ">" + $(this).val() + "</span>"),
            $("#DispatchSpecTempLabel").show(),
            $("#DispatchSpecTempNotes").show(),
            $("#TSOutputDispatchLabel").append($("#TSOutputDispatchLabelHidden")).show()) : ($('span[id="' + $(this).attr("id") + '"]').remove(),
            $("#DispatchSpecTempLabel").hide(),
            $("#DispatchSpecTempNotes").hide(),
            $("#tsHiding").append($("#TSOutputDispatchLabelHidden")),
            //$("#TSOutputDispatchLabel").remove($("#TSOutputDispatchLabelHidden")).hide())
            $("#TSOutputDispatchLabel").hide())
    }),
    //Slow Speeds Issue Checkboxes
    $("#SlowSpeedsAOHD").change(function() {
        $("#SlowSpeedsAOHD").prop("checked") ? $("#output").children("#TSOutputLabel").children("#TSOutputSec").append("<span id=" + $(this).attr("id") + ">" + $(this).val() + "</span>") : $('span[id="' + $(this).attr("id") + '"]').remove()
    }),
    $("#SlowSpeedsPowerC").change(function() {
        $("#SlowSpeedsPowerC").prop("checked") ? $("#output").children("#TSOutputLabel").children("#TSOutputSec").append("<span id=" + $(this).attr("id") + ">" + $(this).val() + "</span>") : $('span[id="' + $(this).attr("id") + '"]').remove()
    }),
    $("#SlowSpeedsEth").change(function() {
        $("#SlowSpeedsEth").prop("checked") ? $("#output").children("#TSOutputLabel").children("#TSOutputSec").append("<span id=" + $(this).attr("id") + ">" + $(this).val() + "</span>") : $('span[id="' + $(this).attr("id") + '"]').remove()
    }),
    $("#SlowSpeedsDisWiFi").change(function() {
        $("#SlowSpeedsDisWiFi").prop("checked") ? $("#output").children("#TSOutputLabel").children("#TSOutputSec").append("<span id=" + $(this).attr("id") + ">" + $(this).val() + "</span>") : $('span[id="' + $(this).attr("id") + '"]').remove()
    }),
$("#SlowSpeedsDisFW").change(function() {
    $("#SlowSpeedsDisFW").prop("checked") ? $("#output").children("#TSOutputLabel").children("#TSOutputSec").append("<span id=" + $(this).attr("id") + ">" + $(this).val() + "</span>") : $('span[id="' + $(this).attr("id") + '"]').remove()
}),
$("#SlowSpeedsDisAV").change(function() {
    $("#SlowSpeedsDisAV").prop("checked") ? $("#output").children("#TSOutputLabel").children("#TSOutputSec").append("<span id=" + $(this).attr("id") + ">" + $(this).val() + "</span>") : $('span[id="' + $(this).attr("id") + '"]').remove()
}),
$("#SlowSpeedsSpeedTests").change(function() {
    $("#SlowSpeedsSpeedTests").prop("checked") ? $("#output").children("#TSOutputLabel").children("#TSOutputSec").append("<span id=" + $(this).attr("id") + ">" + $(this).val() + "</span>") : $('span[id="' + $(this).attr("id") + '"]').remove()
}),
$("#SlowSpeedsAvgPass").change(function() {
    $("#SlowSpeedsAvgPass").prop("checked") ? $("#output").children("#TSOutputLabel").children("#TSOutputSec").append("<span id=" + $(this).attr("id") + ">" + $(this).val() + "</span>") : $('span[id="' + $(this).attr("id") + '"]').remove()
}),
$("#SlowSpeedsAvgFail").change(function() {
    $("#SlowSpeedsAvgFail").prop("checked") ? $("#output").children("#TSOutputLabel").children("#TSOutputSec").append("<span id=" + $(this).attr("id") + ">" + $(this).val() + "</span>") : $('span[id="' + $(this).attr("id") + '"]').remove()
}),
    //Slow Speeds Dispatch Populator
$("#SlowSpeedsDispatch").change(function() {
    $("#SlowSpeedsDispatch").prop("checked") ? ($("#output").children("#TSOutputLabel").children("#TSOutputSec").append("<span id=" + $(this).attr("id") + ">" + $(this).val() + "</span>"),
        $("#DispatchSpecTempLabel").show(),
        $("#DispatchSpecTempNotes").show(),
        $("#TSOutputDispatchLabel").append($("#TSOutputDispatchLabelHidden")).show()) : ($('span[id="' + $(this).attr("id") + '"]').remove(),
        $("#DispatchSpecTempLabel").hide(),
        $("#DispatchSpecTempNotes").hide(),
        $("#tsHiding").append($("#TSOutputDispatchLabelHidden")),
        //$("#TSOutputDispatchLabel").remove($("#TSOutputDispatchLabelHidden")).hide())
        $("#TSOutputDispatchLabel").hide())
}),
    //No BRAS Issue Checkboxes
$("#NoRouteDSLPowerC").change(function() {
    $("#NoRouteDSLPowerC").prop("checked") ? $("#output").children("#TSOutputLabel").children("#TSOutputSec").append("<span id=" + $(this).attr("id") + ">" + $(this).val() + "</span>") : $('span[id="' + $(this).attr("id") + '"]').remove()
}),
$("#NoRouteDSLPPUpdateandPC").change(function() {
    $("#NoRouteDSLPPUpdateandPC").prop("checked") ? $("#output").children("#TSOutputLabel").children("#TSOutputSec").append("<span id=" + $(this).attr("id") + ">" + $(this).val() + "</span>") : $('span[id="' + $(this).attr("id") + '"]').remove()
}),
$("#NoRouteFailedLogins").change(function() {
    $("#NoRouteFailedLogins").prop("checked") ? $("#output").children("#TSOutputLabel").children("#TSOutputSec").append("<span id=" + $(this).attr("id") + ">" + $(this).val() + "</span>") : $('span[id="' + $(this).attr("id") + '"]').remove()
}),
$("#NoRouteMCO").change(function() {
    $("#NoRouteMCO").prop("checked") ? $("#output").children("#TSOutputLabel").children("#TSOutputSec").append("<span id=" + $(this).attr("id") + ">" + $(this).val() + "</span>") : $('span[id="' + $(this).attr("id") + '"]').remove()
}),
$("#NoRouteDSLChangePass").change(function() {
    $("#NoRouteDSLChangePass").prop("checked") ? $("#output").children("#TSOutputLabel").children("#TSOutputSec").append("<span id=" + $(this).attr("id") + ">" + $(this).val() + "</span>") : $('span[id="' + $(this).attr("id") + '"]').remove()
}),
$("#NoRouteDSLPPPandPC").change(function() {
    $("#NoRouteDSLPPPandPC").prop("checked") ? $("#output").children("#TSOutputLabel").children("#TSOutputSec").append("<span id=" + $(this).attr("id") + ">" + $(this).val() + "</span>") : $('span[id="' + $(this).attr("id") + '"]').remove()
}),
//No BRAS Dispatch Populator
$("#NoRouteDSLDispatch").change(function() {
    $("#NoRouteDSLDispatch").prop("checked") ? ($("#output").children("#TSOutputLabel").children("#TSOutputSec").append("<span id=" + $(this).attr("id") + ">" + $(this).val() + "</span>"),
        $("#DispatchSpecTempLabel").show(),
        $("#DispatchSpecTempNotes").show(),
        $("#TSOutputDispatchLabel").append($("#TSOutputDispatchLabelHidden")).show()) : ($('span[id="' + $(this).attr("id") + '"]').remove(),
        $("#DispatchSpecTempLabel").hide(),
        $("#DispatchSpecTempNotes").hide(),
        $("#tsHiding").append($("#TSOutputDispatchLabelHidden")),
        //$("#TSOutputDispatchLabel").remove($("#TSOutputDispatchLabelHidden")).hide())
        $("#TSOutputDispatchLabel").hide())
}),
/*Non DSL issue marked for removal
$("#NoRouteFiberPowerC").change(function() {
    $("#NoRouteFiberPowerC").prop("checked") ? $("#output").children("#TSOutputLabel").children("#TSOutputSec").append("<span id=" + $(this).attr("id") + ">" + $(this).val() + "</span>") : $('span[id="' + $(this).attr("id") + '"]').remove()
}),
$("#NoRouteFiberDispatch").change(function() {
    $("#NoRouteFiberDispatch").prop("checked") ? ($("#output").children("#TSOutputLabel").children("#TSOutputSec").append("<span id=" + $(this).attr("id") + ">" + $(this).val() + "</span>"),
        $("#DispatchSpecTempLabel").show(),
        $("#DispatchSpecTempNotes").show(),
        $("#TSOutputDispatchLabel").append($("#TSOutputDispatchLabelHidden")).show()) : ($('span[id="' + $(this).attr("id") + '"]').remove(),
        $("#DispatchSpecTempLabel").hide(),
        $("#DispatchSpecTempNotes").hide(),
        $("#tsHiding").append($("#TSOutputDispatchLabelHidden")),
        //$("#TSOutputDispatchLabel").remove($("#TSOutputDispatchLabelHidden")).hide())
        $("#TSOutputDispatchLabel").hide())
}), End of non DSL issue marked for removal */
//No Ethernet Light Issue Checkboxes
$("#NoEthLightPowerC").change(function() {
    $("#NoEthLightPowerC").prop("checked") ? $("#output").children("#TSOutputLabel").children("#TSOutputSec").append("<span id=" + $(this).attr("id") + ">" + $(this).val() + "</span>") : $('span[id="' + $(this).attr("id") + '"]').remove()
}),
$("#NoEthLightPowerCDevice").change(function() {
    $("#NoEthLightPowerCDevice").prop("checked") ? $("#output").children("#TSOutputLabel").children("#TSOutputSec").append("<span id=" + $(this).attr("id") + ">" + $(this).val() + "</span>") : $('span[id="' + $(this).attr("id") + '"]').remove()
}),
$("#NoEthLightSecureConns").change(function() {
    $("#NoEthLightSecureConns").prop("checked") ? $("#output").children("#TSOutputLabel").children("#TSOutputSec").append("<span id=" + $(this).attr("id") + ">" + $(this).val() + "</span>") : $('span[id="' + $(this).attr("id") + '"]').remove()
}),
$("#NoEthLightOtherPort").change(function() {
    $("#NoEthLightOtherPort").prop("checked") ? $("#output").children("#TSOutputLabel").children("#TSOutputSec").append("<span id=" + $(this).attr("id") + ">" + $(this).val() + "</span>") : $('span[id="' + $(this).attr("id") + '"]').remove()
}),
$("#NoEthLightOtherCable").change(function() {
    $("#NoEthLightOtherCable").prop("checked") ? $("#output").children("#TSOutputLabel").children("#TSOutputSec").append("<span id=" + $(this).attr("id") + ">" + $(this).val() + "</span>") : $('span[id="' + $(this).attr("id") + '"]').remove()
}),
$("#NoEthLightPatchCheck").change(function() {
    $("#NoEthLightPatchCheck").prop("checked") ? $("#output").children("#TSOutputLabel").children("#TSOutputSec").append("<span id=" + $(this).attr("id") + ">" + $(this).val() + "</span>") : $('span[id="' + $(this).attr("id") + '"]').remove()
}),
$("#NoEthLightLACCheck").change(function() {
    $("#NoEthLightLACCheck").prop("checked") ? $("#output").children("#TSOutputLabel").children("#TSOutputSec").append("<span id=" + $(this).attr("id") + ">" + $(this).val() + "</span>") : $('span[id="' + $(this).attr("id") + '"]').remove()
}),
$("#NoEthLightOST").change(function() {
    $("#NoEthLightOST").prop("checked") ? $("#output").children("#TSOutputLabel").children("#TSOutputSec").append("<span id=" + $(this).attr("id") + ">" + $(this).val() + "</span>") : $('span[id="' + $(this).attr("id") + '"]').remove()
}),
$("#NoEthLightReferred").change(function() {
    $("#NoEthLightReferred").prop("checked") ? $("#output").children("#TSOutputLabel").children("#TSOutputSec").append("<span id=" + $(this).attr("id") + ">" + $(this).val() + "</span>") : $('span[id="' + $(this).attr("id") + '"]').remove()
}),
//No Ethernet Light Modem Replacement Populator
$("#NoEthLightModemReplace").change(function() {
    $("#NoEthLightModemReplace").prop("checked") ? ($("#output").children("#TSOutputLabel").children("#TSOutputSec").append("<span id=" + $(this).attr("id") + ">" + $(this).val() + "</span>"),
        $("#ModemReplaceSpecTempLabel").show(),
        $("#ModemReplaceSpecTempNotes").show(),
        $("#TSOutputModemReplaceLabel").append($("#TSOutputModemReplaceLabelHidden")).show()) : ($('span[id="' + $(this).attr("id") + '"]').remove(),
        $("#ModemReplaceSpecTempLabel").hide(),
        $("#ModemReplaceSpecTempNotes").hide(),
        $("#tsHiding").append($("#TSOutputModemReplaceLabelHidden")),
        //$("#TSOutputModemReplaceLabel").remove($("#TSOutputModemReplaceLabelHidden")).hide())
        $("#TSOutputModemReplaceLabel").hide())
}),
//No Power / Faulty Modem Issue Checkboxes
$("#NoPowerLightToggle").change(function() {
    $("#NoPowerLightToggle").prop("checked") ? $("#output").children("#TSOutputLabel").children("#TSOutputSec").append("<span id=" + $(this).attr("id") + ">" + $(this).val() + "</span>") : $('span[id="' + $(this).attr("id") + '"]').remove()
}),
$("#NoPowerLightReseat").change(function() {
    $("#NoPowerLightReseat").prop("checked") ? $("#output").children("#TSOutputLabel").children("#TSOutputSec").append("<span id=" + $(this).attr("id") + ">" + $(this).val() + "</span>") : $('span[id="' + $(this).attr("id") + '"]').remove();
}),
$("#NoPowerLightAltOutlet").change(function() {
    $("#NoPowerLightAltOutlet").prop("checked") ? $("#output").children("#TSOutputLabel").children("#TSOutputSec").append("<span id=" + $(this).attr("id") + ">" + $(this).val() + "</span>") : $('span[id="' + $(this).attr("id") + '"]').remove()
}),
//No Power Light Modem Replacement Populator
$("#NoPowerLightModemReplace").change(function() {
    $("#NoPowerLightModemReplace").prop("checked") ? ($("#output").children("#TSOutputLabel").children("#TSOutputSec").append("<span id=" + $(this).attr("id") + ">" + $(this).val() + "</span>"),
        $("#ModemReplaceSpecTempLabel").show(),
        $("#ModemReplaceSpecTempNotes").show(),
        $("#TSOutputModemReplaceLabel").append($("#TSOutputModemReplaceLabelHidden")).show()) : ($('span[id="' + $(this).attr("id") + '"]').remove(),
        $("#ModemReplaceSpecTempLabel").hide(),
        $("#ModemReplaceSpecTempNotes").hide(),
        $("#tsHiding").append($("#TSOutputModemReplaceLabelHidden")),
        //$("#TSOutputModemReplaceLabel").remove($("#TSOutputModemReplaceLabelHidden")).hide())
        $("#TSOutputModemReplaceLabel").hide())
}),
//Wireless Issue Checkboxes
$("#WiFiEnableCheck").change(function() {
    $("#WiFiEnableCheck").prop("checked") ? $("#output").children("#TSOutputLabel").children("#TSOutputSec").append("<span id=" + $(this).attr("id") + ">" + $(this).val() + "</span>") : $('span[id="' + $(this).attr("id") + '"]').remove()
}),
$("#WiFiEnableFW").change(function() {
    $("#WiFiEnableFW").prop("checked") ? $("#output").children("#TSOutputLabel").children("#TSOutputSec").append("<span id=" + $(this).attr("id") + ">" + $(this).val() + "</span>") : $('span[id="' + $(this).attr("id") + '"]').remove()
}),
$("#WiFiEnableDeviceCheck").change(function() {
    $("#WiFiEnableDeviceCheck").prop("checked") ? $("#output").children("#TSOutputLabel").children("#TSOutputSec").append("<span id=" + $(this).attr("id") + ">" + $(this).val() + "</span>") : $('span[id="' + $(this).attr("id") + '"]').remove()
}),
$("#WiFiEnableOnDevice").change(function() {
    $("#WiFiEnableOnDevice").prop("checked") ? $("#output").children("#TSOutputLabel").children("#TSOutputSec").append("<span id=" + $(this).attr("id") + ">" + $(this).val() + "</span>") : $('span[id="' + $(this).attr("id") + '"]').remove()
}),
$("#WiFiCorrectSSID").change(function() {
    $("#WiFiCorrectSSID").prop("checked") ? $("#output").children("#TSOutputLabel").children("#TSOutputSec").append("<span id=" + $(this).attr("id") + ">" + $(this).val() + "</span>") : $('span[id="' + $(this).attr("id") + '"]').remove()
}),
$("#WiFiCorrectPassword").change(function() {
    $("#WiFiCorrectPassword").prop("checked") ? $("#output").children("#TSOutputLabel").children("#TSOutputSec").append("<span id=" + $(this).attr("id") + ">" + $(this).val() + "</span>") : $('span[id="' + $(this).attr("id") + '"]').remove()
}),
$("#WiFiChangeSSID").change(function() {
    $("#WiFiChangeSSID").prop("checked") ? $("#output").children("#TSOutputLabel").children("#TSOutputSec").append("<span id=" + $(this).attr("id") + ">" + $(this).val() + "</span>") : $('span[id="' + $(this).attr("id") + '"]').remove()
}),
$("#WiFiChangePassword").change(function() {
    $("#WiFiChangePassword").prop("checked") ? $("#output").children("#TSOutputLabel").children("#TSOutputSec").append("<span id=" + $(this).attr("id") + ">" + $(this).val() + "</span>") : $('span[id="' + $(this).attr("id") + '"]').remove()
}),
$("#WiFiForgetNetwork").change(function() {
    $("#WiFiForgetNetwork").prop("checked") ? $("#output").children("#TSOutputLabel").children("#TSOutputSec").append("<span id=" + $(this).attr("id") + ">" + $(this).val() + "</span>") : $('span[id="' + $(this).attr("id") + '"]').remove()
}),
/*Wireless CNB Populator; possibly marked for removal
$("#WiFiCnB").change(function() {
    $("#WiFiCnB").prop("checked") ? ($("#CnBLabel").show(),
        $("#CnBTS").show()) : ($("#CnBLabel").hide(),
        $("#CnBTS").hide())
}), */
//Out of Scope Issue Checkboxes
$("#OOSOEM").change(function() {
    $("#OOSOEM").prop("checked") ? $("#output").children("#TSOutputLabel").children("#TSOutputSec").append("<span id=" + $(this).attr("id") + ">" + $(this).val() + "</span>") : $('span[id="' + $(this).attr("id") + '"]').remove()
}),
$("#OOSProvider").change(function() {
    $("#OOSProvider").prop("checked") ? $("#output").children("#TSOutputLabel").children("#TSOutputSec").append("<span id=" + $(this).attr("id") + ">" + $(this).val() + "</span>") : $('span[id="' + $(this).attr("id") + '"]').remove()
}),
$("#OOSOST").change(function() {
    $("#OOSOST").prop("checked") ? $("#output").children("#TSOutputLabel").children("#TSOutputSec").append("<span id=" + $(this).attr("id") + ">" + $(this).val() + "</span>") : $('span[id="' + $(this).attr("id") + '"]').remove()
}),
$("#OOSCS").change(function() {
    $("#OOSCS").prop("checked") ? $("#output").children("#TSOutputLabel").children("#TSOutputSec").append("<span id=" + $(this).attr("id") + ">" + $(this).val() + "</span>") : $('span[id="' + $(this).attr("id") + '"]').remove()
});
//F-Secure Dialog Box

dialog = $("#dialog-saleQuestion").dialog({
    autoOpen: false,
    resizable: false,
    height: "auto",
    width: "auto",
    modal: true,
    buttons: {
        "Yes": function() {
            dialogSale.dialog("open");
            $(this).dialog("close");
        },
        "No": function() {
            $("#FSecureOut").append("No offer. [PUT REASON HERE]");
            $(this).dialog("close");
        }
    }
});
//F-Secure Button
$("#fSecure").button().on("click", function() {
    $("#FSecureOut").text("");
    dialog.dialog("open");
});
//NPS Button
$("#nps").button().on("click", function() {
    dialogNPS.dialog("open");
});
//NPS Dialog Box
dialogNPS = $("#dialog-surveyNPS").dialog({
    autoOpen: false,
    resizable: false,
    height: "auto",
    width: "auto",
    modal: true,
    buttons: {
        "Yes": function() {
            $("#NPSSurveyOut").empty();
            $("#NPSSurveyOut").append("Mentioned survey.");
            $(this).dialog("close");
        },
        "No": function() {
            $("#NPSSurveyOut").empty();
            $("#NPSSurveyOut").append("Did not mention.");
            $(this).dialog("close");
        }
    }
})
//F-Secure Sale Dialog Box
dialogSale = $("#dialog-Sale").dialog({
    autoOpen: false,
    resizable: false,
    height: 400,
    width: 400,
    modal: true,
    buttons: {
        "Submit": insertSaleNotes,
        Cancel: function() {
            $("#FSecureOut").text("");
            $("#NPSSurveyOut").text("");
            dialogSale.dialog("close");
        }
    },
    close: function() {
        $("#FSecureOut").text("");
        $("#NPSSurveyOut").text("");
    }
});

$("#agreed").selectmenu();
//F-Secure Sale Notes Function
function insertSaleNotes() {
    var agreed = $("#agreed").val();
    var product = $("#product").val();
    var price = $("#price").val();
    dialogSale.dialog("close");
    //dialogNPS.dialog("open");
    if (agreed == "Yes") {
        $("#FSecureOut").append(product + ", " + price);
        //$("#FSecureOut").append("</br>");
        $("#FSecureOut").append(" Customer AGREES to the product's pricing and wants the product added to their account.");
    } else {
        $("#FSecureOut").append(product + ", " + price);
        //$("#FSecureOut").append("</br>");
        $("#FSecureOut").append(" The customer DECLINED my pitch.")
    }


}
//Copy to Clipboard Button
function copyToClipboard(element) {
    var $temp = $("<textarea>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
}