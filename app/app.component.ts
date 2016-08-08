import { Component } from '@angular/core';
import { UISEMANTIC_ALL } from '../node_modules/ng2-semantic-ui-directives/ng2-sui'

@Component({
    selector: 'my-app',
    directives:[
         UISEMANTIC_ALL
    ],
    template: `
    <div class='ui container'>
        <br>
        <h1>Quickstart Angular2 + Semantic UI</h1>

        <br>
        <div class='ui segment'>
            <h3>Accordian</h3>
            <div ui-accordion class="ui styled accordion">
              <div class="title"><i class="dropdown icon"></i> Level 1</div>
              <div class="content">Welcome to level 1 </div>
              <div class="title"><i class="dropdown icon"></i> Level 2</div>
              <div class="content">Welcome to level 2   </div>
            </div>
        </div>

        <br>
        <div class='ui segment'>
            <h3>Hover</h3>
            <div ui-dimmer [options]="{on: 'hover'}" style="height: 150px" class="ui segment">
              <h3 class="ui header">Hover To Dim</h3>
              <div class="ui dimmer">
                <div class="content">
                  <div class="center">
                    <h2 class="ui inverted icon header"><i class="heart icon"></i>Dimmed Message!</h2>
                  </div>
                </div>
              </div>
            </div>
        </div>

        <br>
        <div class='ui segment'>
            <h3>Embed</h3>
            <div class="ui embed"
                 ui-embed
                 [options]="{icon: 'video', source: 'youtube', id: 'jcd3ygLQjvQ', placeholder: 'http://img.youtube.com/vi/jcd3ygLQjvQ/0.jpg'}" >
            </div>
        </div>

        <br>
        <div class='ui segment'>
            <h3>Tabs</h3>
            <div ui-tab class="ui top attached tabular menu">
              <a data-tab="a" class="item active">First</a>
              <a data-tab="b" class="item">Second</a>
              <a data-tab="c" class="item">Third</a>
            </div>

            <div data-tab="a" class="ui bottom attached tab segment active">First</div>
            <div data-tab="b" class="ui bottom attached tab segment">Second</div>
            <div data-tab="c" class="ui bottom attached tab segment">Third</div>
        </div>

    </div>
    `
})
export class AppComponent { }
