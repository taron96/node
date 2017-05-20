'use strict';

const cheerio = require('cheerio');
let $ = cheerio.load(`
<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="chrome=1">
    <title>Cheerio</title>

    <link rel="stylesheet" href="stylesheets/styles.css">
    <link rel="stylesheet" href="stylesheets/pygment_trac.css">
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
    <!--[if lt IE 9]>
    <script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
  </head>
  <body>
    <div class="wrapper">
      <header>
        <h1>Cheerio</h1>
        <p>Fast, flexible, and lean implementation of core jQuery designed specifically for the server.</p>

        <p class="view"><a href="https://github.com/cheeriojs/cheerio">View the Project on GitHub <small>cheeriojs/cheerio</small></a></p>


        <ul>
          <li><a href="https://github.com/cheeriojs/cheerio/zipball/master">Download <strong>ZIP File</strong></a></li>
          <li><a href="https://github.com/cheeriojs/cheerio/tarball/master">Download <strong>TAR Ball</strong></a></li>
          <li><a href="https://github.com/cheeriojs/cheerio">View On <strong>GitHub</strong></a></li>
        </ul>
      </header>
      <section>
        <h1>
<a name="cheerio-" class="anchor" href="#cheerio-"><span class="octicon octicon-link"></span></a>cheerio <a href="http://travis-ci.org/cheeriojs/cheerio"><img src="https://secure.travis-ci.org/cheeriojs/cheerio.png?branch=master" alt="Build Status"></a>
</h1>

<p>Fast, flexible, and lean implementation of core jQuery designed specifically for the server.</p>

<h2>
<a name="introduction" class="anchor" href="#introduction"><span class="octicon octicon-link"></span></a>Introduction</h2>

<p>Teach your server HTML.</p>

<div class="highlight"><pre><span class="kd">var</span> <span class="nx">cheerio</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span><span class="s1">'cheerio'</span><span class="p">),</span>
    <span class="nx">$</span> <span class="o">=</span> <span class="nx">cheerio</span><span class="p">.</span><span class="nx">load</span><span class="p">(</span><span class="s1">'&lt;h2 class = "title"&gt;Hello world&lt;/h2&gt;'</span><span class="p">);</span>

<span class="nx">$</span><span class="p">(</span><span class="s1">'h2.title'</span><span class="p">).</span><span class="nx">text</span><span class="p">(</span><span class="s1">'Hello there!'</span><span class="p">);</span>
<span class="nx">$</span><span class="p">(</span><span class="s1">'h2'</span><span class="p">).</span><span class="nx">addClass</span><span class="p">(</span><span class="s1">'welcome'</span><span class="p">);</span>

<span class="nx">$</span><span class="p">.</span><span class="nx">html</span><span class="p">();</span>
<span class="c1">//=&gt; &lt;h2 class = "title welcome"&gt;Hello there!&lt;/h2&gt;</span>
</pre></div>

<h2>
<a name="installation" class="anchor" href="#installation"><span class="octicon octicon-link"></span></a>Installation</h2>

<p><code>npm install cheerio</code></p>

<h2>
<a name="features" class="anchor" href="#features"><span class="octicon octicon-link"></span></a>Features</h2>

<p><strong>❤ Familiar syntax:</strong>
Cheerio implements a subset of core jQuery. Cheerio removes all the DOM inconsistencies and browser cruft from the jQuery library, revealing its truly gorgeous API.</p>

<p><strong>ϟ Blazingly fast:</strong>
Cheerio works with a very simple, consistent DOM model. As a result parsing, manipulating, and rendering are incredibly efficient. Preliminary end-to-end benchmarks suggest that cheerio is about <strong>8x</strong> faster than JSDOM.</p>

<p><strong>❁ Insanely flexible:</strong>
Cheerio wraps around <a href="https://github.com/FB55" class="user-mention">@FB55</a>'s forgiving <a href="https://github.com/fb55/htmlparser2">htmlparser2</a>. Cheerio can parse nearly any HTML or XML document.</p>

<h2>
<a name="what-about-jsdom" class="anchor" href="#what-about-jsdom"><span class="octicon octicon-link"></span></a>What about JSDOM?</h2>

<p>I wrote cheerio because I found myself increasingly frustrated with JSDOM. For me, there were three main sticking points that I kept running into again and again:</p>

<p><strong>• JSDOM's built-in parser is too strict:</strong>
  JSDOM's bundled HTML parser cannot handle many popular sites out there today.</p>

<p><strong>• JSDOM is too slow:</strong>
Parsing big websites with JSDOM has a noticeable delay.</p>

<p><strong>• JSDOM feels too heavy:</strong>
The goal of JSDOM is to provide an identical DOM environment as what we see in the browser. I never really needed all this, I just wanted a simple, familiar way to do HTML manipulation.</p>

<h2>
<a name="when-i-would-use-jsdom" class="anchor" href="#when-i-would-use-jsdom"><span class="octicon octicon-link"></span></a>When I would use JSDOM</h2>

<p>Cheerio will not solve all your problems. I would still use JSDOM if I needed to work in a browser-like environment on the server, particularly if I wanted to automate functional tests.</p>

<h2>
<a name="api" class="anchor" href="#api"><span class="octicon octicon-link"></span></a>API</h2>

<h3>
<a name="markup-example-well-be-using" class="anchor" href="#markup-example-well-be-using"><span class="octicon octicon-link"></span></a>Markup example we'll be using:</h3>

<div class="highlight"><pre><span class="nt">&lt;ul</span> <span class="na">id=</span><span class="s">"fruits"</span><span class="nt">&gt;</span>
  <span class="nt">&lt;li</span> <span class="na">class=</span><span class="s">"apple"</span><span class="nt">&gt;</span>Apple<span class="nt">&lt;/li&gt;</span>
  <span class="nt">&lt;li</span> <span class="na">class=</span><span class="s">"orange"</span><span class="nt">&gt;</span>Orange<span class="nt">&lt;/li&gt;</span>
  <span class="nt">&lt;li</span> <span class="na">class=</span><span class="s">"pear"</span><span class="nt">&gt;</span>Pear<span class="nt">&lt;/li&gt;</span>
<span class="nt">&lt;/ul&gt;</span>
</pre></div>

<p>This is the HTML markup we will be using in all of the API examples.</p>

<h3>
<a name="loading" class="anchor" href="#loading"><span class="octicon octicon-link"></span></a>Loading</h3>

<p>First you need to load in the HTML. This step in jQuery is implicit, since jQuery operates on the one, baked-in DOM. With Cheerio, we need to pass in the HTML document.</p>

<p>This is the <em>preferred</em> method:</p>

<div class="highlight"><pre><span class="kd">var</span> <span class="nx">cheerio</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span><span class="s1">'cheerio'</span><span class="p">),</span>
    <span class="nx">$</span> <span class="o">=</span> <span class="nx">cheerio</span><span class="p">.</span><span class="nx">load</span><span class="p">(</span><span class="s1">'&lt;ul id = "fruits"&gt;...&lt;/ul&gt;'</span><span class="p">);</span>
</pre></div>

<p>Optionally, you can also load in the HTML by passing the string as the context:</p>

<div class="highlight"><pre><span class="nx">$</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span><span class="s1">'cheerio'</span><span class="p">);</span>
<span class="nx">$</span><span class="p">(</span><span class="s1">'ul'</span><span class="p">,</span> <span class="s1">'&lt;ul id = "fruits"&gt;...&lt;/ul&gt;'</span><span class="p">);</span>
</pre></div>

<p>Or as the root:</p>

<div class="highlight"><pre><span class="nx">$</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span><span class="s1">'cheerio'</span><span class="p">);</span>
<span class="nx">$</span><span class="p">(</span><span class="s1">'li'</span><span class="p">,</span> <span class="s1">'ul'</span><span class="p">,</span> <span class="s1">'&lt;ul id = "fruits"&gt;...&lt;/ul&gt;'</span><span class="p">);</span>
</pre></div>

<p>You can also pass an extra object to <code>.load()</code> if you need to modify any
of the default parsing options:</p>

<div class="highlight"><pre><span class="nx">$</span> <span class="o">=</span> <span class="nx">cheerio</span><span class="p">.</span><span class="nx">load</span><span class="p">(</span><span class="s1">'&lt;ul id = "fruits"&gt;...&lt;/ul&gt;'</span><span class="p">,</span> <span class="p">{</span>
    <span class="nx">ignoreWhitespace</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span>
    <span class="nx">xmlMode</span><span class="o">:</span> <span class="kc">true</span>
<span class="p">});</span>
</pre></div>

<p>These parsing options are taken directly from htmlparser2, therefore any options that can be used in htmlparser2
are valid in cheerio as well. The default options are:</p>

<div class="highlight"><pre><span class="p">{</span>
    <span class="nx">ignoreWhitespace</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span>
    <span class="nx">xmlMode</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span>
    <span class="nx">lowerCaseTags</span><span class="o">:</span> <span class="kc">false</span>
<span class="p">}</span>
</pre></div>

<p>For a list of options and their effects, see <a href="https://github.com/fb55/domhandler">this</a> and
<a href="https://github.com/fb55/htmlparser2/wiki/Parser-options">this</a>.</p>

<h3>
<a name="selectors" class="anchor" href="#selectors"><span class="octicon octicon-link"></span></a>Selectors</h3>

<p>Cheerio's selector implementation is nearly identical to jQuery's, so the API is very similar.</p>

<h4>
<a name="-selector-context-root-" class="anchor" href="#-selector-context-root-"><span class="octicon octicon-link"></span></a>$( selector, [context], [root] )</h4>

<p><code>selector</code> searches within the <code>context</code> scope which searches within the <code>root</code> scope. <code>selector</code> and <code>context</code> can be an string expression, DOM Element, array of DOM elements, or cheerio object. <code>root</code> is typically the HTML document string.</p>

<p>This selector method is the starting point for traversing and manipulating the document. Like jQuery, it's the primary method for selecting elements in the document, but unlike jQuery it's built on top of the CSSSelect library, which implements most of the Sizzle selectors.</p>

<div class="highlight"><pre><span class="nx">$</span><span class="p">(</span><span class="s1">'.apple'</span><span class="p">,</span> <span class="s1">'#fruits'</span><span class="p">).</span><span class="nx">text</span><span class="p">()</span>
<span class="c1">//=&gt; Apple</span>

<span class="nx">$</span><span class="p">(</span><span class="s1">'ul .pear'</span><span class="p">).</span><span class="nx">attr</span><span class="p">(</span><span class="s1">'class'</span><span class="p">)</span>
<span class="c1">//=&gt; pear</span>

<span class="nx">$</span><span class="p">(</span><span class="s1">'li[class=orange]'</span><span class="p">).</span><span class="nx">html</span><span class="p">()</span>
<span class="c1">//=&gt; &lt;li class = "orange"&gt;Orange&lt;/li&gt;</span>
</pre></div>

<h3>
<a name="attributes" class="anchor" href="#attributes"><span class="octicon octicon-link"></span></a>Attributes</h3>

<p>Methods for getting and modifying attributes.</p>

<h4>
<a name="attr-name-value-" class="anchor" href="#attr-name-value-"><span class="octicon octicon-link"></span></a>.attr( name, value )</h4>

<p>Method for getting and setting attributes. Gets the attribute value for only the first element in the matched set. If you set an attribute's value to <code>null</code>, you remove that attribute. You may also pass a <code>map</code> and <code>function</code> like jQuery.</p>

<div class="highlight"><pre><span class="nx">$</span><span class="p">(</span><span class="s1">'ul'</span><span class="p">).</span><span class="nx">attr</span><span class="p">(</span><span class="s1">'id'</span><span class="p">)</span>
<span class="c1">//=&gt; fruits</span>

<span class="nx">$</span><span class="p">(</span><span class="s1">'.apple'</span><span class="p">).</span><span class="nx">attr</span><span class="p">(</span><span class="s1">'id'</span><span class="p">,</span> <span class="s1">'favorite'</span><span class="p">).</span><span class="nx">html</span><span class="p">()</span>
<span class="c1">//=&gt; &lt;li class = "apple" id = "favorite"&gt;Apple&lt;/li&gt;</span>
</pre></div>

<blockquote>
<p>See <a href="http://api.jquery.com/attr/">http://api.jquery.com/attr/</a> for more information</p>
</blockquote>

<h4>
<a name="removeattr-name-" class="anchor" href="#removeattr-name-"><span class="octicon octicon-link"></span></a>.removeAttr( name )</h4>

<p>Method for removing attributes by <code>name</code>.</p>

<div class="highlight"><pre><span class="nx">$</span><span class="p">(</span><span class="s1">'.pear'</span><span class="p">).</span><span class="nx">removeAttr</span><span class="p">(</span><span class="s1">'class'</span><span class="p">).</span><span class="nx">html</span><span class="p">()</span>
<span class="c1">//=&gt; &lt;li&gt;Pear&lt;/li&gt;</span>
</pre></div>

<h4>
<a name="hasclass-classname-" class="anchor" href="#hasclass-classname-"><span class="octicon octicon-link"></span></a>.hasClass( className )</h4>

<p>Check to see if <em>any</em> of the matched elements have the given <code>className</code>.</p>

<div class="highlight"><pre><span class="nx">$</span><span class="p">(</span><span class="s1">'.pear'</span><span class="p">).</span><span class="nx">hasClass</span><span class="p">(</span><span class="s1">'pear'</span><span class="p">)</span>
<span class="c1">//=&gt; true</span>

<span class="nx">$</span><span class="p">(</span><span class="s1">'apple'</span><span class="p">).</span><span class="nx">hasClass</span><span class="p">(</span><span class="s1">'fruit'</span><span class="p">)</span>
<span class="c1">//=&gt; false</span>

<span class="nx">$</span><span class="p">(</span><span class="s1">'li'</span><span class="p">).</span><span class="nx">hasClass</span><span class="p">(</span><span class="s1">'pear'</span><span class="p">)</span>
<span class="c1">//=&gt; true</span>
</pre></div>

<h4>
<a name="addclass-classname-" class="anchor" href="#addclass-classname-"><span class="octicon octicon-link"></span></a>.addClass( className )</h4>

<p>Adds class(es) to all of the matched elements. Also accepts a <code>function</code> like jQuery.</p>

<div class="highlight"><pre><span class="nx">$</span><span class="p">(</span><span class="s1">'.pear'</span><span class="p">).</span><span class="nx">addClass</span><span class="p">(</span><span class="s1">'fruit'</span><span class="p">).</span><span class="nx">html</span><span class="p">()</span>
<span class="c1">//=&gt; &lt;li class = "pear fruit"&gt;Pear&lt;/li&gt;</span>

<span class="nx">$</span><span class="p">(</span><span class="s1">'.apple'</span><span class="p">).</span><span class="nx">addClass</span><span class="p">(</span><span class="s1">'fruit red'</span><span class="p">).</span><span class="nx">html</span><span class="p">()</span>
<span class="c1">//=&gt; &lt;li class = "apple fruit red"&gt;Apple&lt;/li&gt;</span>
</pre></div>

<blockquote>
<p>See <a href="http://api.jquery.com/addClass/">http://api.jquery.com/addClass/</a> for more information.</p>
</blockquote>

<h4>
<a name="removeclass-classname-" class="anchor" href="#removeclass-classname-"><span class="octicon octicon-link"></span></a>.removeClass( [className] )</h4>

<p>Removes one or more space-separated classes from the selected elements. If no <code>className</code> is defined, all classes will be removed. Also accepts a <code>function</code> like jQuery.</p>

<div class="highlight"><pre><span class="nx">$</span><span class="p">(</span><span class="s1">'.pear'</span><span class="p">).</span><span class="nx">removeClass</span><span class="p">(</span><span class="s1">'pear'</span><span class="p">).</span><span class="nx">html</span><span class="p">()</span>
<span class="c1">//=&gt; &lt;li class = ""&gt;Pear&lt;/li&gt;</span>

<span class="nx">$</span><span class="p">(</span><span class="s1">'.apple'</span><span class="p">).</span><span class="nx">addClass</span><span class="p">(</span><span class="s1">'red'</span><span class="p">).</span><span class="nx">removeClass</span><span class="p">().</span><span class="nx">html</span><span class="p">()</span>
<span class="c1">//=&gt; &lt;li class = ""&gt;Apple&lt;/li&gt;</span>
</pre></div>

<blockquote>
<p>See <a href="http://api.jquery.com/removeClass/">http://api.jquery.com/removeClass/</a> for more information.</p>
</blockquote>

<h3>
<a name="traversing" class="anchor" href="#traversing"><span class="octicon octicon-link"></span></a>Traversing</h3>

<h4>
<a name="findselector" class="anchor" href="#findselector"><span class="octicon octicon-link"></span></a>.find(selector)</h4>

<p>Get a set of descendants filtered by <code>selector</code> of each element in the current set of matched elements.</p>

<div class="highlight"><pre><span class="nx">$</span><span class="p">(</span><span class="s1">'#fruits'</span><span class="p">).</span><span class="nx">find</span><span class="p">(</span><span class="s1">'li'</span><span class="p">).</span><span class="nx">length</span>
<span class="c1">//=&gt; 3</span>
</pre></div>

<h4>
<a name="parent" class="anchor" href="#parent"><span class="octicon octicon-link"></span></a>.parent()</h4>

<p>Gets the parent of the first selected element.</p>

<div class="highlight"><pre><span class="nx">$</span><span class="p">(</span><span class="s1">'.pear'</span><span class="p">).</span><span class="nx">parent</span><span class="p">().</span><span class="nx">attr</span><span class="p">(</span><span class="s1">'id'</span><span class="p">)</span>
<span class="c1">//=&gt; fruits</span>
</pre></div>

<h4>
<a name="next" class="anchor" href="#next"><span class="octicon octicon-link"></span></a>.next()</h4>

<p>Gets the next sibling of the first selected element.</p>

<div class="highlight"><pre><span class="nx">$</span><span class="p">(</span><span class="s1">'.apple'</span><span class="p">).</span><span class="nx">next</span><span class="p">().</span><span class="nx">hasClass</span><span class="p">(</span><span class="s1">'orange'</span><span class="p">)</span>
<span class="c1">//=&gt; true</span>
</pre></div>

<h4>
<a name="prev" class="anchor" href="#prev"><span class="octicon octicon-link"></span></a>.prev()</h4>

<p>Gets the previous sibling of the first selected element.</p>

<div class="highlight"><pre><span class="nx">$</span><span class="p">(</span><span class="s1">'.orange'</span><span class="p">).</span><span class="nx">prev</span><span class="p">().</span><span class="nx">hasClass</span><span class="p">(</span><span class="s1">'apple'</span><span class="p">)</span>
<span class="c1">//=&gt; true</span>
</pre></div>

<h4>
<a name="siblings" class="anchor" href="#siblings"><span class="octicon octicon-link"></span></a>.siblings()</h4>

<p>Gets the first selected element's siblings, excluding itself.</p>

<div class="highlight"><pre><span class="nx">$</span><span class="p">(</span><span class="s1">'.pear'</span><span class="p">).</span><span class="nx">siblings</span><span class="p">().</span><span class="nx">length</span>
<span class="c1">//=&gt; 2</span>
</pre></div>

<h4>
<a name="children-selector-" class="anchor" href="#children-selector-"><span class="octicon octicon-link"></span></a>.children( selector )</h4>

<p>Gets the children of the first selected element.</p>

<div class="highlight"><pre><span class="nx">$</span><span class="p">(</span><span class="s1">'#fruits'</span><span class="p">).</span><span class="nx">children</span><span class="p">().</span><span class="nx">length</span>
<span class="c1">//=&gt; 3</span>

<span class="nx">$</span><span class="p">(</span><span class="s1">'#fruits'</span><span class="p">).</span><span class="nx">children</span><span class="p">(</span><span class="s1">'.pear'</span><span class="p">).</span><span class="nx">text</span><span class="p">()</span>
<span class="c1">//=&gt; Pear</span>
</pre></div>

<h4>
<a name="each-functionindex-element-" class="anchor" href="#each-functionindex-element-"><span class="octicon octicon-link"></span></a>.each( function(index, element) )</h4>

<p>Iterates over a cheerio object, executing a function for each matched element. When the callback is fired, the function is fired in the context of the DOM element, so <code>this</code> refers to the current element, which is equivalent to the function parameter <code>element</code>. To break out of the <code>each</code> loop early, return with <code>false</code>.</p>

<div class="highlight"><pre><span class="kd">var</span> <span class="nx">fruits</span> <span class="o">=</span> <span class="p">[];</span>

<span class="nx">$</span><span class="p">(</span><span class="s1">'li'</span><span class="p">).</span><span class="nx">each</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">i</span><span class="p">,</span> <span class="nx">elem</span><span class="p">)</span> <span class="p">{</span>
  <span class="nx">fruits</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nx">text</span><span class="p">();</span>
<span class="p">});</span>

<span class="nx">fruits</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span><span class="s1">', '</span><span class="p">);</span>
<span class="c1">//=&gt; Apple, Orange, Pear</span>
</pre></div>

<h4>
<a name="map-functionindex-element-" class="anchor" href="#map-functionindex-element-"><span class="octicon octicon-link"></span></a>.map( function(index, element) )</h4>

<p>Iterates over a cheerio object, executing a function for each selected element. Map will return an <code>array</code> of return values from each of the functions it iterated over. The function is fired in the context of the DOM element, so <code>this</code> refers to the current element, which is equivalent to the function parameter <code>element</code>.</p>

<div class="highlight"><pre><span class="nx">$</span><span class="p">(</span><span class="s1">'li'</span><span class="p">).</span><span class="nx">map</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">i</span><span class="p">,</span> <span class="nx">el</span><span class="p">)</span> <span class="p">{</span>
  <span class="c1">// this === el</span>
  <span class="k">return</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nx">attr</span><span class="p">(</span><span class="s1">'class'</span><span class="p">);</span>
<span class="p">}).</span><span class="nx">get</span><span class="p">().</span><span class="nx">join</span><span class="p">(</span><span class="s1">', '</span><span class="p">);</span>
<span class="c1">//=&gt; apple, orange, pear</span>
</pre></div>

<h4>
<a name="filter-selector---filter-functionindex-" class="anchor" href="#filter-selector---filter-functionindex-"><span class="octicon octicon-link"></span></a>.filter( selector ) <br> .filter( function(index) )</h4>

<p>Iterates over a cheerio object, reducing the set of selector elements to those that match the selector or pass the function's test. If using the function method, the function is executed in the context of the selected element, so <code>this</code> refers to the current element.</p>

<p>Selector:</p>

<div class="highlight"><pre><span class="nx">$</span><span class="p">(</span><span class="s1">'li'</span><span class="p">).</span><span class="nx">filter</span><span class="p">(</span><span class="s1">'.orange'</span><span class="p">).</span><span class="nx">attr</span><span class="p">(</span><span class="s1">'class'</span><span class="p">);</span>
<span class="c1">//=&gt; orange</span>
</pre></div>

<p>Function:</p>

<div class="highlight"><pre><span class="nx">$</span><span class="p">(</span><span class="s1">'li'</span><span class="p">).</span><span class="nx">filter</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">i</span><span class="p">,</span> <span class="nx">el</span><span class="p">)</span> <span class="p">{</span>
  <span class="c1">// this === el</span>
  <span class="k">return</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">).</span><span class="nx">attr</span><span class="p">(</span><span class="s1">'class'</span><span class="p">)</span> <span class="o">===</span> <span class="s1">'orange'</span><span class="p">;</span>
<span class="p">}).</span><span class="nx">attr</span><span class="p">(</span><span class="s1">'class'</span><span class="p">)</span>
<span class="c1">//=&gt; orange</span>
</pre></div>

<h4>
<a name="first" class="anchor" href="#first"><span class="octicon octicon-link"></span></a>.first()</h4>

<p>Will select the first element of a cheerio object</p>

<div class="highlight"><pre><span class="nx">$</span><span class="p">(</span><span class="s1">'#fruits'</span><span class="p">).</span><span class="nx">children</span><span class="p">().</span><span class="nx">first</span><span class="p">().</span><span class="nx">text</span><span class="p">()</span>
<span class="c1">//=&gt; Apple</span>
</pre></div>

<h4>
<a name="last" class="anchor" href="#last"><span class="octicon octicon-link"></span></a>.last()</h4>

<p>Will select the last element of a cheerio object</p>

<div class="highlight"><pre><span class="nx">$</span><span class="p">(</span><span class="s1">'#fruits'</span><span class="p">).</span><span class="nx">children</span><span class="p">().</span><span class="nx">last</span><span class="p">().</span><span class="nx">text</span><span class="p">()</span>
<span class="c1">//=&gt; Pear</span>
</pre></div>

<h4>
<a name="eq-i-" class="anchor" href="#eq-i-"><span class="octicon octicon-link"></span></a>.eq( i )</h4>

<p>Reduce the set of matched elements to the one at the specified index. Use <code>.eq(-i)</code> to count backwards from the last selected element.</p>

<div class="highlight"><pre><span class="nx">$</span><span class="p">(</span><span class="s1">'li'</span><span class="p">).</span><span class="nx">eq</span><span class="p">(</span><span class="mi">0</span><span class="p">).</span><span class="nx">text</span><span class="p">()</span>
<span class="c1">//=&gt; Apple</span>

<span class="nx">$</span><span class="p">(</span><span class="s1">'li'</span><span class="p">).</span><span class="nx">eq</span><span class="p">(</span><span class="o">-</span><span class="mi">1</span><span class="p">).</span><span class="nx">text</span><span class="p">()</span>
<span class="c1">//=&gt; Pear</span>
</pre></div>

<h3>
<a name="manipulation" class="anchor" href="#manipulation"><span class="octicon octicon-link"></span></a>Manipulation</h3>

<p>Methods for modifying the DOM structure.</p>

<h4>
<a name="append-content-content--" class="anchor" href="#append-content-content--"><span class="octicon octicon-link"></span></a>.append( content, [content, ...] )</h4>

<p>Inserts content as the <em>last</em> child of each of the selected elements.</p>

<div class="highlight"><pre><span class="nx">$</span><span class="p">(</span><span class="s1">'ul'</span><span class="p">).</span><span class="nx">append</span><span class="p">(</span><span class="s1">'&lt;li class = "plum"&gt;Plum&lt;/li&gt;'</span><span class="p">)</span>
<span class="nx">$</span><span class="p">.</span><span class="nx">html</span><span class="p">()</span>
<span class="c1">//=&gt;  &lt;ul id = "fruits"&gt;</span>
<span class="c1">//      &lt;li class = "apple"&gt;Apple&lt;/li&gt;</span>
<span class="c1">//      &lt;li class = "orange"&gt;Orange&lt;/li&gt;</span>
<span class="c1">//      &lt;li class = "pear"&gt;Pear&lt;/li&gt;</span>
<span class="c1">//      &lt;li class = "plum"&gt;Plum&lt;/li&gt;</span>
<span class="c1">//    &lt;/ul&gt;</span>
</pre></div>

<h4>
<a name="prepend-content-content--" class="anchor" href="#prepend-content-content--"><span class="octicon octicon-link"></span></a>.prepend( content, [content, ...] )</h4>

<p>Inserts content as the <em>first</em> child of each of the selected elements.</p>

<div class="highlight"><pre><span class="nx">$</span><span class="p">(</span><span class="s1">'ul'</span><span class="p">).</span><span class="nx">prepend</span><span class="p">(</span><span class="s1">'&lt;li class = "plum"&gt;Plum&lt;/li&gt;'</span><span class="p">)</span>
<span class="nx">$</span><span class="p">.</span><span class="nx">html</span><span class="p">()</span>
<span class="c1">//=&gt;  &lt;ul id = "fruits"&gt;</span>
<span class="c1">//      &lt;li class = "plum"&gt;Plum&lt;/li&gt;</span>
<span class="c1">//      &lt;li class = "apple"&gt;Apple&lt;/li&gt;</span>
<span class="c1">//      &lt;li class = "orange"&gt;Orange&lt;/li&gt;</span>
<span class="c1">//      &lt;li class = "pear"&gt;Pear&lt;/li&gt;</span>
<span class="c1">//    &lt;/ul&gt;</span>
</pre></div>

<h4>
<a name="after-content-content--" class="anchor" href="#after-content-content--"><span class="octicon octicon-link"></span></a>.after( content, [content, ...] )</h4>

<p>Insert content next to each element in the set of matched elements.</p>

<div class="highlight"><pre><span class="nx">$</span><span class="p">(</span><span class="s1">'.apple'</span><span class="p">).</span><span class="nx">after</span><span class="p">(</span><span class="s1">'&lt;li class = "plum"&gt;Plum&lt;/li&gt;'</span><span class="p">)</span>
<span class="nx">$</span><span class="p">.</span><span class="nx">html</span><span class="p">()</span>
<span class="c1">//=&gt;  &lt;ul id = "fruits"&gt;</span>
<span class="c1">//      &lt;li class = "apple"&gt;Apple&lt;/li&gt;</span>
<span class="c1">//      &lt;li class = "plum"&gt;Plum&lt;/li&gt;</span>
<span class="c1">//      &lt;li class = "orange"&gt;Orange&lt;/li&gt;</span>
<span class="c1">//      &lt;li class = "pear"&gt;Pear&lt;/li&gt;</span>
<span class="c1">//    &lt;/ul&gt;</span>
</pre></div>

<h4>
<a name="before-content-content--" class="anchor" href="#before-content-content--"><span class="octicon octicon-link"></span></a>.before( content, [content, ...] )</h4>

<p>Insert content previous to each element in the set of matched elements.</p>

<div class="highlight"><pre><span class="nx">$</span><span class="p">(</span><span class="s1">'.apple'</span><span class="p">).</span><span class="nx">before</span><span class="p">(</span><span class="s1">'&lt;li class = "plum"&gt;Plum&lt;/li&gt;'</span><span class="p">)</span>
<span class="nx">$</span><span class="p">.</span><span class="nx">html</span><span class="p">()</span>
<span class="c1">//=&gt;  &lt;ul id = "fruits"&gt;</span>
<span class="c1">//      &lt;li class = "plum"&gt;Plum&lt;/li&gt;</span>
<span class="c1">//      &lt;li class = "apple"&gt;Apple&lt;/li&gt;</span>
<span class="c1">//      &lt;li class = "orange"&gt;Orange&lt;/li&gt;</span>
<span class="c1">//      &lt;li class = "pear"&gt;Pear&lt;/li&gt;</span>
<span class="c1">//    &lt;/ul&gt;</span>
</pre></div>

<h4>
<a name="remove-selector-" class="anchor" href="#remove-selector-"><span class="octicon octicon-link"></span></a>.remove( [selector] )</h4>

<p>Removes the set of matched elements from the DOM and all their children. <code>selector</code> filters the set of matched elements to be removed.</p>

<div class="highlight"><pre><span class="nx">$</span><span class="p">(</span><span class="s1">'.pear'</span><span class="p">).</span><span class="nx">remove</span><span class="p">()</span>
<span class="nx">$</span><span class="p">.</span><span class="nx">html</span><span class="p">()</span>
<span class="c1">//=&gt;  &lt;ul id = "fruits"&gt;</span>
<span class="c1">//      &lt;li class = "apple"&gt;Apple&lt;/li&gt;</span>
<span class="c1">//      &lt;li class = "orange"&gt;Orange&lt;/li&gt;</span>
<span class="c1">//    &lt;/ul&gt;</span>
</pre></div>

<h4>
<a name="replacewith-content-" class="anchor" href="#replacewith-content-"><span class="octicon octicon-link"></span></a>.replaceWith( content )</h4>

<p>Replaces matched elements with <code>content</code>.</p>

<div class="highlight"><pre><span class="kd">var</span> <span class="nx">plum</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s1">'&lt;li class = "plum"&gt;Plum&lt;/li&gt;'</span><span class="p">)</span>
<span class="nx">$</span><span class="p">(</span><span class="s1">'.pear'</span><span class="p">).</span><span class="nx">replaceWith</span><span class="p">(</span><span class="nx">plum</span><span class="p">)</span>
<span class="nx">$</span><span class="p">.</span><span class="nx">html</span><span class="p">()</span>
<span class="c1">//=&gt; &lt;ul id = "fruits"&gt;</span>
<span class="c1">//     &lt;li class = "apple"&gt;Apple&lt;/li&gt;</span>
<span class="c1">//     &lt;li class = "orange"&gt;Orange&lt;/li&gt;</span>
<span class="c1">//     &lt;li class = "plum"&gt;Plum&lt;/li&gt;</span>
<span class="c1">//   &lt;/ul&gt;</span>
</pre></div>

<h4>
<a name="empty" class="anchor" href="#empty"><span class="octicon octicon-link"></span></a>.empty()</h4>

<p>Empties an element, removing all it's children.</p>

<div class="highlight"><pre><span class="nx">$</span><span class="p">(</span><span class="s1">'ul'</span><span class="p">).</span><span class="nx">empty</span><span class="p">()</span>
<span class="nx">$</span><span class="p">.</span><span class="nx">html</span><span class="p">()</span>
<span class="c1">//=&gt;  &lt;ul id = "fruits"&gt;&lt;/ul&gt;</span>
</pre></div>

<h4>
<a name="html-htmlstring-" class="anchor" href="#html-htmlstring-"><span class="octicon octicon-link"></span></a>.html( [htmlString] )</h4>

<p>Gets an html content string from the first selected element. If <code>htmlString</code> is specified, each selected element's content is replaced by the new content.</p>

<div class="highlight"><pre><span class="nx">$</span><span class="p">(</span><span class="s1">'.orange'</span><span class="p">).</span><span class="nx">html</span><span class="p">()</span>
<span class="c1">//=&gt; Orange</span>

<span class="nx">$</span><span class="p">(</span><span class="s1">'#fruits'</span><span class="p">).</span><span class="nx">html</span><span class="p">(</span><span class="s1">'&lt;li class = "mango"&gt;Mango&lt;/li&gt;'</span><span class="p">).</span><span class="nx">html</span><span class="p">()</span>
<span class="c1">//=&gt; &lt;li class="mango"&gt;Mango&lt;/li&gt;</span>
</pre></div>

<h4>
<a name="text-textstring-" class="anchor" href="#text-textstring-"><span class="octicon octicon-link"></span></a>.text( [textString] )</h4>

<p>Get the combined text contents of each element in the set of matched elements, including their descendants.. If <code>textString</code> is specified, each selected element's content is replaced by the new text content.</p>

<div class="highlight"><pre><span class="nx">$</span><span class="p">(</span><span class="s1">'.orange'</span><span class="p">).</span><span class="nx">text</span><span class="p">()</span>
<span class="c1">//=&gt; Orange</span>

<span class="nx">$</span><span class="p">(</span><span class="s1">'ul'</span><span class="p">).</span><span class="nx">text</span><span class="p">()</span>
<span class="c1">//=&gt;  Apple</span>
<span class="c1">//    Orange</span>
<span class="c1">//    Pear</span>
</pre></div>

<h3>
<a name="rendering" class="anchor" href="#rendering"><span class="octicon octicon-link"></span></a>Rendering</h3>

<p>When you're ready to render the document, you can use <code>html</code> utility function:</p>

<div class="highlight"><pre><span class="nx">$</span><span class="p">.</span><span class="nx">html</span><span class="p">()</span>
<span class="c1">//=&gt;  &lt;ul id = "fruits"&gt;</span>
<span class="c1">//      &lt;li class = "apple"&gt;Apple&lt;/li&gt;</span>
<span class="c1">//      &lt;li class = "orange"&gt;Orange&lt;/li&gt;</span>
<span class="c1">//      &lt;li class = "pear"&gt;Pear&lt;/li&gt;</span>
<span class="c1">//    &lt;/ul&gt;</span>
</pre></div>

<p>If you want to return the outerHTML you can use <code>$.html(selector)</code>:</p>

<div class="highlight"><pre><span class="nx">$</span><span class="p">.</span><span class="nx">html</span><span class="p">(</span><span class="s1">'.pear'</span><span class="p">)</span>
<span class="c1">//=&gt; &lt;li class = "pear"&gt;Pear&lt;/li&gt;</span>
</pre></div>

<h3>
<a name="miscellaneous" class="anchor" href="#miscellaneous"><span class="octicon octicon-link"></span></a>Miscellaneous</h3>

<p>DOM element methods that don't fit anywhere else</p>

<h4>
<a name="toarray" class="anchor" href="#toarray"><span class="octicon octicon-link"></span></a>.toArray()</h4>

<p>Retrieve all the DOM elements contained in the jQuery set, as an array.</p>

<div class="highlight"><pre><span class="nx">$</span><span class="p">(</span><span class="s1">'li'</span><span class="p">).</span><span class="nx">toArray</span><span class="p">()</span>
<span class="c1">//=&gt; [ {...}, {...}, {...} ]</span>
</pre></div>

<h4>
<a name="clone" class="anchor" href="#clone"><span class="octicon octicon-link"></span></a>.clone()</h4>

<p>Clone the cheerio object.</p>

<div class="highlight"><pre><span class="kd">var</span> <span class="nx">moreFruit</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s1">'#fruits'</span><span class="p">).</span><span class="nx">clone</span><span class="p">()</span>
</pre></div>

<h3>
<a name="utilities" class="anchor" href="#utilities"><span class="octicon octicon-link"></span></a>Utilities</h3>

<h4>
<a name="root" class="anchor" href="#root"><span class="octicon octicon-link"></span></a>$.root</h4>

<p>Sometimes you need to work with the top-level root element. To query it, you can use <code>$.root()</code>.</p>

<div class="highlight"><pre><span class="nx">$</span><span class="p">.</span><span class="nx">root</span><span class="p">().</span><span class="nx">append</span><span class="p">(</span><span class="s1">'&lt;ul id="vegetables"&gt;&lt;/ul&gt;'</span><span class="p">).</span><span class="nx">html</span><span class="p">();</span>
<span class="c1">//=&gt; &lt;ul id="fruits"&gt;...&lt;/ul&gt;&lt;ul id="vegetables"&gt;&lt;/ul&gt;</span>
</pre></div>

<h4>
<a name="contains-container-contained-" class="anchor" href="#contains-container-contained-"><span class="octicon octicon-link"></span></a>$.contains( container, contained )</h4>

<p>Checks to see if the <code>contained</code> DOM element is a descendent of the <code>container</code> DOM element.</p>

<h2>
<a name="screencasts" class="anchor" href="#screencasts"><span class="octicon octicon-link"></span></a>Screencasts</h2>

<p><a href="http://vimeo.com/31950192">http://vimeo.com/31950192</a></p>

<blockquote>
<p>This video tutorial is a follow-up to Nettut's "How to Scrape Web Pages with Node.js and jQuery", using cheerio instead of JSDOM + jQuery. This video shows how easy it is to use cheerio and how much faster cheerio is than JSDOM + jQuery.</p>
</blockquote>

<h2>
<a name="test-coverage" class="anchor" href="#test-coverage"><span class="octicon octicon-link"></span></a>Test Coverage</h2>

<p>Cheerio has high-test coverage, you can view the report <a href="https://s3.amazonaws.com/MattMueller/Coverage/cheerio.html">here</a>.</p>

<h2>
<a name="testing" class="anchor" href="#testing"><span class="octicon octicon-link"></span></a>Testing</h2>

<p>To run the test suite, download the repository, then within the cheerio directory, run:</p>

<pre lang="shell"><code>make setup
make test
</code></pre>

<p>This will download the development packages and run the test suite.</p>

<h2>
<a name="contributors" class="anchor" href="#contributors"><span class="octicon octicon-link"></span></a>Contributors</h2>

<p>These are some of the contributors that have made cheerio possible:</p>

<pre><code>project  : cheerio
repo age : 1 year, 4 months ago
commits  : 416
active   : 118 days
files    : 26
authors  :
  278 Matt Mueller            66.8%
   68 Matthew Mueller         16.3%
   27 David Chambers          6.5%
   15 Siddharth Mahendraker   3.6%
    7 ironchefpython          1.7%
    5 Jos Shepherd            1.2%
    5 Ben Sheldon             1.2%
    2 alexbardas              0.5%
    2 Rob Ashton              0.5%
    1 mattym                  0.2%
    1 Chris O'Hara            0.2%
    1 Mike Pennisi            0.2%
    1 Rob "Hurricane" Ashton  0.2%
    1 Sindre Sorhus           0.2%
    1 Wayne Larsen            0.2%
    1 Ben Atkin               0.2%
</code></pre>

<h2>
<a name="special-thanks" class="anchor" href="#special-thanks"><span class="octicon octicon-link"></span></a>Special Thanks</h2>

<p>This library stands on the shoulders of some incredible developers. A special thanks to:</p>

<p><strong>• <a href="https://github.com/FB55" class="user-mention">@FB55</a> for <a href="https://github.com/fb55/htmlparser2">htmlparser2</a> &amp; <a href="https://github.com/fb55/css-select">css-select</a>:</strong>
Felix has a knack for writing speedy parsing engines. He completely re-wrote both @tautologistic's <code>node-htmlparser</code> and <a href="https://github.com/harry" class="user-mention">@harry</a>'s <code>node-soupselect</code> from the ground up, making both of them much faster and more flexible. Cheerio would not be possible without his foundational work</p>

<p><strong>• <a href="https://github.com/jQuery" class="user-mention">@jQuery</a> team for jQuery:</strong>
The core API is the best of it's class and despite dealing with all the browser inconsistencies the code base is extremely clean and easy to follow. Much of cheerio's implementation and documentation is from jQuery. Thanks guys.</p>

<p><strong>• <a href="https://github.com/visionmedia" class="user-mention">@visionmedia</a>:</strong>
The style, the structure, the open-source"-ness" of this library comes from studying TJ's style and using many of his libraries. This dude consistently pumps out high-quality libraries and has always been more than willing to help or answer questions. You rock TJ.</p>

<h2>
<a name="license" class="anchor" href="#license"><span class="octicon octicon-link"></span></a>License</h2>

<p>(The MIT License)</p>

<p>Copyright (c) 2012 Matt Mueller &lt;<a href="mailto:mattmuelle@gmail.com">mattmuelle@gmail.com</a>&gt;</p>

<p>Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:</p>

<p>The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.</p>

<p>THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</p>
      </section>
      <footer>
        <p>This project is maintained by <a href="https://github.com/matthewmueller">matthewmueller</a></p>
        <p><small>Hosted on GitHub Pages &mdash; Theme by <a href="https://github.com/orderedlist">orderedlist</a></small></p>
      </footer>
    </div>
    <script src="javascripts/scale.fix.js"></script>
              <script type="text/javascript">
            var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
            document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));
          </script>
          <script type="text/javascript">
            try {
              var pageTracker = _gat._getTracker("UA-10351690-10");
            pageTracker._trackPageview();
            } catch(err) {}
          </script>

  </body>
</html>
`);
console.log($.html());
console.log('\n\n\n\n\n');
$('html').remove();
console.log($.html());
