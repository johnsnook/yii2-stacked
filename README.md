Stacked: a tabbed alternative for Yii2
=====================
[![Latest Stable Version](https://poser.pugx.org/johnsnook/yii2-stacked/v/stable)](https://packagist.org/packages/johnsnook/yii2-stacked)![img](https://poser.pugx.org/johnsnook/yii2-stacked/downloads) ![img](https://poser.pugx.org/johnsnook/yii2-stacked/v/unstable) ![img](https://poser.pugx.org/johnsnook/yii2-stacked/license) ![img](https://poser.pugx.org/phpunit/phpunit/composerlock) 

I was testing some software the other day, and was having trouble remembering where I'd put a particular feature when I realized it had been under my nose the whole time, in a tab pane.  So I started thinking about a new way to put content out of the way without putting it out of sight, and this is what I came up with.

## Requirements

- PHP >= v5.4
- Yii2 v2.14
- jQuery v3.x
- Bootstrap 3

Installation
------------

The preferred way to install this extension is through [composer](http://getcomposer.org/download/).

Either run

```bash
php composer.phar require --prefer-dist johnsnook/yii2-stacked "*"
```

or add

```
"johnsnook/yii2-stacked": "*"
```

to the require section of your `composer.json` file.

## Usage


Once the extension is installed, you can start using it in views immediately:

```php
<?php
	use johnsnook\stacked\StackedWidget;
	use johnsnook\stacked\PanelWidget;
?>
....
```

The PanelWidget is completely optional since the jQuery plugin will assume all top level children of the selected container are to be displayed, but PanelWidget makes panels quickly.  Then main thing is that the nesting is kept clean and everything is between the `StackedWidget::begin()` and `StackedWidget::end()`
```php
...
<?php
    StackedWidget::begin([
        'gutterSize' => 35,
        'containerOptions' => ['style' => 'margin-top:40px; margin-bottom:40px;'],
    ]);
    /** the panel widget makes nice and easy bootstrap 3 panels */    
    PanelWidget::begin([
        'containerOptions' => ['class' => 'panel-success'],
        'title' => "Panel #1"
    ]);
?>
    <p>The two British divers who found 12 missing boys and their football coach alive in a flooded cave in Thailand boast extensive experience. Rick Stanton and John Volanthen, who reached the group nine days after they vanished, are so well known among cave rescuers that they had reportedly been requested specially. Yet their work is entirely voluntary; one is a firefighter, the other a computer engineer. And far from glorying in their role, Mr Volanthen had brushed off reporters as he entered the cave, saying only: “We’ve got a job to do.”</p>   
<?php
    PanelWidget::end();

    PanelWidget::begin([
        'containerOptions' => ['class' => 'panel-primary'],
        'title' => "Panel #2"
    ]);
?>
    <p>An intensifying debate over Judge Brett M. Kavanaugh, a front-runner in President Trump’s search for a Supreme Court nominee, gripped Republicans on Tuesday, with conservative critics highlighting past rulings and his links to GOP leaders while his allies — including inside the White House — forcefully defended him.</p>
<?php    
	PanelWidget::end();
	/** all panels should be closed with ::end() before closing the StackedWidget. */
    StackedWidget::end();
?>    
```

Screenshot
-----
![stacked bs 3](E:\Projects\stacked bs 3.png)