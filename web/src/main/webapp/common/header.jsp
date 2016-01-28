<%@ include file="/common/taglibs.jsp"%>

<c:if test="${pageContext.request.locale.language ne 'en'}">
    <div id="switchLocale"><a href="<c:url value='/?locale=en'/>"><fmt:message key="webapp.name"/> in English</a></div>
</c:if>

<div id="branding">
    <h1><a href="<c:url value='/'/>"><img class="logo" src="../images/logo.png" />
    </a></h1>    
</div>
<hr />

<%-- Put constants into request scope --%>
<appfuse:constants scope="request"/>