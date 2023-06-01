    

<div class="box mt-5" style="margin-left: 30px; margin-top: 5px">
  <div class="my-2 w-25">
    <!-- make loop for the categories array  -->
    <label for="" class="my-1">categories :</label>
    <br />
    <!-- detect the change that happen in the selection which category has choosen  -->
    <!-- (event)method binding -->
    <select class="form-control" (change)="filterCategory($event)" style="width: 150px; height: 30px">
      <option value="all" selected>ALL</option>

      <!-- after creat the method getCategories we make this loop with ngfor to display it in the selection -->
      <!-- property binding -->
      <option value="{{ option }}" *ngFor="let option of caregories">{{ option }}</option>
    </select>
  </div>
</div>

<div class="container">
  <!-- 2 -->

  <div class="boox" *ngFor="let item of products" >
    <!-- <a routerLink="details/{{item.id}}"> -->
      <a [routerLink]="['details']" [queryParams]="{id: item.id}">
    <!-- <a routerLink="det"> -->



    <div class="item" style="width: 200px; height: 400">
      <img style="width: 200px; height: 200px" src="{{ item.image }}" alt="" />
      <div class="body">
        <h4>{{ item.title }}</h4>
        <p>{{ item.description }}</p>
      </div>
      <div style="display: flex">
        <div class="px-3 mb-2 d-flex justify-content-between align-item-center">
          <span>{{ item.price }} L.E</span>
          <br />
          <br />
          <button class="btn btn-success">Add To Cart</button>
        </div>
      </div>
    </div>

  </a>

  </div>

</div>


<!-- <div class="box mt-5" style="margin-left: 30px; margin-top: 5px;">
    <div class="my-2 w-25">
        <label for="" class="my-1">categories :</label>
        <select class="form-control">
            <option value="1">option 1</option>
            <option value="2">option 2</option>
            <option value="3">option 3</option>
            <option value="4">option 4</option>
        </select>
    </div>
</div> -->
