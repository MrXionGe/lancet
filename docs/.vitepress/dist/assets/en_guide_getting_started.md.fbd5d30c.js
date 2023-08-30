import{_ as s,o as a,c as n,X as l}from"./chunks/framework.6e839c56.js";const g=JSON.parse('{"title":"Installation","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"en/guide/getting_started.md","filePath":"en/guide/getting_started.md"}'),o={name:"en/guide/getting_started.md"},e=l(`<h1 id="Installation" tabindex="-1">Installation <a class="header-anchor" href="#Installation" aria-label="Permalink to &quot;Installation&quot;">​</a></h1><ol><li><b>For users who use go1.18 and above, it is recommended to install lancet v2.x.x. Cause in v2.x.x all functions was rewriten with generics of go1.18.</b></li></ol><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">go</span><span style="color:#F6F6F4;"> get github.com</span><span style="color:#F286C4;">/</span><span style="color:#F6F6F4;">duke</span><span style="color:#F286C4;">-</span><span style="color:#F6F6F4;">git</span><span style="color:#F286C4;">/</span><span style="color:#F6F6F4;">lancet</span><span style="color:#F286C4;">/</span><span style="color:#F6F6F4;">v2 </span><span style="color:#7B7F8B;">// will install latest version of v2.x.x</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#1E754F;">go</span><span style="color:#393A34;"> get github</span><span style="color:#999999;">.</span><span style="color:#393A34;">com</span><span style="color:#AB5959;">/</span><span style="color:#393A34;">duke</span><span style="color:#AB5959;">-</span><span style="color:#393A34;">git</span><span style="color:#AB5959;">/</span><span style="color:#393A34;">lancet</span><span style="color:#AB5959;">/</span><span style="color:#393A34;">v2 </span><span style="color:#A0ADA0;">// will install latest version of v2.x.x</span></span></code></pre></div><ol start="2"><li><b>For users who use version below go1.18, you should install v1.x.x. The latest of v1.x.x is v1.4.1. </b></li></ol><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">go</span><span style="color:#F6F6F4;"> get github.com</span><span style="color:#F286C4;">/</span><span style="color:#F6F6F4;">duke</span><span style="color:#F286C4;">-</span><span style="color:#F6F6F4;">git</span><span style="color:#F286C4;">/</span><span style="color:#F6F6F4;">lancet </span><span style="color:#7B7F8B;">// below go1.18, install latest version of v1.x.x</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#1E754F;">go</span><span style="color:#393A34;"> get github</span><span style="color:#999999;">.</span><span style="color:#393A34;">com</span><span style="color:#AB5959;">/</span><span style="color:#393A34;">duke</span><span style="color:#AB5959;">-</span><span style="color:#393A34;">git</span><span style="color:#AB5959;">/</span><span style="color:#393A34;">lancet </span><span style="color:#A0ADA0;">// below go1.18, install latest version of v1.x.x</span></span></code></pre></div><h2 id="Usage" tabindex="-1">Usage <a class="header-anchor" href="#Usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><p>Lancet organizes the code into package structure, and you need to import the corresponding package name when use it. For example, if you use string-related functions, just import the strutil package like below:</p><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">import</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">github.com/duke-git/lancet/v2/strutil</span><span style="color:#DEE492;">&quot;</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#1E754F;">import</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&quot;</span><span style="color:#59873A;">github.com/duke-git/lancet/v2/strutil</span><span style="color:#B5695999;">&quot;</span></span></code></pre></div><h2 id="Example" tabindex="-1">Example <a class="header-anchor" href="#Example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><p>Here takes the string function <code>Reverse</code> (reverse order string) as an example, and the strutil package needs to be imported.</p><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki dracula-soft vp-code-dark"><code><span class="line"><span style="color:#F286C4;">package</span><span style="color:#F6F6F4;"> main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F286C4;">import</span><span style="color:#F6F6F4;"> (</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">fmt</span><span style="color:#DEE492;">&quot;</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">github.com/duke-git/lancet/v2/strutil</span><span style="color:#DEE492;">&quot;</span></span>
<span class="line"><span style="color:#F6F6F4;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F286C4;">func</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">main</span><span style="color:#F6F6F4;">() {</span></span>
<span class="line"><span style="color:#F6F6F4;">    s </span><span style="color:#F286C4;">:=</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">hello</span><span style="color:#DEE492;">&quot;</span></span>
<span class="line"><span style="color:#F6F6F4;">    rs </span><span style="color:#F286C4;">:=</span><span style="color:#F6F6F4;"> strutil.</span><span style="color:#97E1F1;">Reverse</span><span style="color:#F6F6F4;">(s)</span></span>
<span class="line"><span style="color:#F6F6F4;">    fmt.</span><span style="color:#97E1F1;">Println</span><span style="color:#F6F6F4;">(rs) </span><span style="color:#7B7F8B;">//olleh</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#1E754F;">package</span><span style="color:#393A34;"> </span><span style="color:#59873A;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#1E754F;">import</span><span style="color:#393A34;"> </span><span style="color:#999999;">(</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B5695999;">&quot;</span><span style="color:#59873A;">fmt</span><span style="color:#B5695999;">&quot;</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B5695999;">&quot;</span><span style="color:#59873A;">github.com/duke-git/lancet/v2/strutil</span><span style="color:#B5695999;">&quot;</span></span>
<span class="line"><span style="color:#999999;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#1E754F;">func</span><span style="color:#393A34;"> </span><span style="color:#59873A;">main</span><span style="color:#999999;">()</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B07D48;">s</span><span style="color:#393A34;"> </span><span style="color:#999999;">:=</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">hello</span><span style="color:#B5695999;">&quot;</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B07D48;">rs</span><span style="color:#393A34;"> </span><span style="color:#999999;">:=</span><span style="color:#393A34;"> strutil</span><span style="color:#999999;">.</span><span style="color:#998418;">Reverse</span><span style="color:#999999;">(</span><span style="color:#393A34;">s</span><span style="color:#999999;">)</span></span>
<span class="line"><span style="color:#393A34;">    fmt</span><span style="color:#999999;">.</span><span style="color:#998418;">Println</span><span style="color:#999999;">(</span><span style="color:#393A34;">rs</span><span style="color:#999999;">)</span><span style="color:#393A34;"> </span><span style="color:#A0ADA0;">//olleh</span></span>
<span class="line"><span style="color:#999999;">}</span></span></code></pre></div><h2 id="More" tabindex="-1">More <a class="header-anchor" href="#More" aria-label="Permalink to &quot;More&quot;">​</a></h2><p>Check out the <a href="https://github.com/duke-git/lancet" target="_blank" rel="noreferrer">APIs</a> for details.</p>`,13),p=[e];function t(c,r,i,y,d,F){return a(),n("div",null,p)}const h=s(o,[["render",t]]);export{g as __pageData,h as default};