---
layout: default
title: Android Holo Style EditText
---

<h2>{{ page.title }}</h2>

这两天改项目的UI，需求是要**改成Android Holo风格**。

可惜，现在改已经晚了。

Google I/O 2014中已经发布了新一代的Material Design设计风格。
(其实包括新闻啊，还是知乎中[如何理解 Google 的 Material Design 设计语言？](http://www.zhihu.com/question/24276657)，都把它称之为设计语言，把他称之为一个**语言**，个人觉得稍有不妥，它是一种风格呀，虽然也可以理解成为表达的一种方式。刚看到时，我还以为Google刚发布了一款**编程语言**呢。像Apple WWDC2014中的Swift。)

不管那么多了。

关于Holo风格，我觉得这个开源做的挺好的。
[HoloEverywhere](https://github.com/Prototik/HoloEverywhere)


<!--?prettify lang=xml linenums=true linenums=1?-->
<pre class="prettyprint" style="border:4px solid #88c">
    <resources xmlns:android="http://schemas.android.com/apk/res/android">

        <!--
            Base application theme, dependent on API level. This theme is replaced
            by AppBaseTheme from res/values-vXX/styles.xml on newer devices.

        -->
        <style name="AppBaseTheme" parent="android:Theme.Light">
            <!--
                Theme customizations available in newer API levels can go in
                res/values-vXX/styles.xml, while customizations related to
                backward-compatibility can go here.

            -->
        </style>

        <!-- Application theme. -->
        <style name="AppTheme" parent="AppBaseTheme">
            <!-- All customizations that are NOT specific to a particular API-level can go here. -->
        </style>

        <!-- <style name="Holo" parent="" /> -->

        <style name="Holo.EditText" parent="">
            <item name="android:background">@drawable/edit_text_holo_light</item>
            <item name="android:clickable">true</item>
            <item name="android:focusable">true</item>
            <item name="android:focusableInTouchMode">true</item>
            <item name="android:gravity">center_vertical</item>
            <item name="android:textAppearance">?android:textAppearanceMedium</item>
        </style>

        <style name="Holo.EditText.WHITELINE" parent="Holo.EditText">
            <item name="android:textColor">@android:color/white</item>
            <item name="android:background">@drawable/edit_text_holo_light</item><!-- TODO Hugo NEED WHITE pic -->
            <!-- <item name="android:textCursorDrawable">@android:color/white</item> -->
        </style>

    </resources>
</pre>