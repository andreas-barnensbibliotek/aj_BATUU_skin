<%@ Control Language="vb" AutoEventWireup="true" CodeBehind="View.ascx.vb" Inherits="bokomdv3.aj.aj_v3_bokomdomenaj_v3_bokomdomen.View" %>
<%@ Register TagPrefix="dnn" Namespace="DotNetNuke.Web.Client.ClientResourceManagement" Assembly="DotNetNuke.Web.Client" %>
<%@ Register TagPrefix="dnn" TagName="JavaScriptLibraryInclude" Src="~/admin/Skins/JavaScriptLibraryInclude.ascx" %>
<div class="row p-2 mx-n2 batuu-background-row-lila">
    <div class="col">

        <div id="bokomdomen">
			<img src="/Portals/_default/Skins/bb_BATUU/images/ajax-loader.gif" alt="Laddar nya bokomdömen">            
        </div>
    </div>
</div>

<dnn:DnnJsInclude runat="server" FilePath="../../../../DesktopModules/aj_v3_bokomdomen/public/aj_bb_bokomdomenWidget.1.0.0.js" PathNameAlias="SkinPath" />
