# API

## Introduction

## Getting Started

`mkdir API`
`cd API`
`dotnet new webapi`

## Entity Framework

1. Install package
   `dotnet add package Microsoft.EntityFrameworkCore`
   `dotnet add package Microsoft.EntityFrameworkCore.Design`
   `dotnet add package Microsoft.EntityFrameworkCore.SqlServer`
   `dotnet add package Microsoft.EntityFrameworkCore.SqlServer.Design`
2. Scafford :

- Add ConnectionString to appsetting.json:
  "ConnectionStrings": {
  "DefaultConnection": "Server=CP-H34\\TEW*SQLEXPRESS;Database=\_NEEDLE_SUPPLIER*;Trusted_Connection=True;TrustServerCertificate=True"
  },
- Miration (Mira to seperate folder) :
  (server)`dotnet ef dbcontext scaffold "Server=10.4.2.23;Database=_NEEDLE_SUPPLIER_;User ID=sa;Password=shc@1234;MultipleActiveResultSets=True;" Microsoft.EntityFrameworkCore.SqlServer --context-dir Data --output-dir Models`
  (local) `dotnet ef dbcontext scaffold Name=ConnectionStrings:DefaultConnection Microsoft.EntityFrameworkCore.SqlServer --context-dir Data --output-dir Models`
  `dotnet ef dbcontext scaffold Name=ConnectionStrings:Local_DefaultConnection Microsoft.EntityFrameworkCore.SqlServer --context-dir Data --output-dir Models --force`
- Disable nullable : `#nullable disable`

3. Add DbContext to DI container Programs.cs with specificed location
   `builder.Services.AddDbContext<NeedleSupplierContext>(i => i.UseSqlServer(builder.Configuration.GetConnectionString($"{location}_DefaultConnection")));`

   - If problem with id tracking happended (turn off tracking)
     `builder.Services.AddDbContext<NeedleSupplierContext>(i =>{i.UseSqlServer(ConnectionString);i.UseQueryTrackingBehavior(QueryTrackingBehavior.NoTracking);});`

4. Delete OnConfiguing (if so)
   `protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder => optionsBuilder.UseSqlServer("Name=ConnectionStrings:DefaultConnection");`

## Auto Mapper

1. Install Package
   `dotnet add package AutoMapper`
   `dotnet add package AutoMapper.Extensions.Microsoft.DependencyInjection`
2. Create AutoMapper Dir with required .cs files

- AutoMapperConfig (regist AutoMapper in program.cs)
- Model to DTO profile
- DTO to Model profile

3. Regist Automapper in program.cs
   `builder.Services.AddScoped<IMapper>(sp => new Mapper(AutoMapperConfig`
   `builder.Services.AddSingleton(AutoMapperConfig.RegisterMappings());`

## Repository

1. Create Direction
   `mkdir _Repositories`
   `mkdir Base`
   `mkdir Interface`
   `mkdir Service`
2. Import Repository Base
   -RepositoryBase, IRepositoryBase to Base folder

3. Add Services (Repository, service) to DI container in program.cs
   `builder.Services.AddScoped<IStaffRepository, StaffRepository>();`
   `builder.Services.AddScoped<IStaffService, StaffService>();`

## JSON Web Token (JWT)

1.  Package
    `Install-Package System.IdentityModel.Tokens.Jwt`
    - Add JWT Utilities
    - Add JWT middleware
2.  Add Services

```typescript
builder.Services.AddAuthentication().AddJwtBearer((options) => {
  options.RequireHttpsMetadata = false;
  options.SaveToken = true;
  options.TokenValidationParameters = new TokenValidationParameters();
  {
    (ValidateIssuerSigningKey = true),
      (IssuerSigningKey = new SymmetricSecurityKey(
        Encoding.UTF8.GetBytes(builder.Configuration["CustomSettings:Token"])
      )),
      (ValidateIssuer = false),
      (ValidateAudience = false);
  }
});
```

3.  Add Configs
    `app.UseMiddleware<ExceptionHandlingMiddleware>();`
    `app.UseMiddleware<JwtMiddleware>();`
    `app.UseAuthorization();`
    `app.UseAuthentication();`

4.  Controller
    [Route("api/[controller]")]
    [ApiController]
    [Authorize (AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public class ApiController : ControllerBase{}

## Serilog packages

## The Code Flow

# Angular UI

- Create module, routing and component without test file
  `ng g m my-page --routing=true && ng g c my-page --skip-tests=true -m=my-page`

## Getting Started

1. Create Project
   `ng new angular-tour-of-heroes`
2. Create Component
   `ng g c component-name`

   - Set enviroment:
     Fix require() - Add types `node` & typesroot `../node_modules/@types` to `tsconfig`
     `npx npm-check-updates`

3. Add Bootstrap ( frontend toolkit)
   `npm install bootstrap@version (yarn add bootstrap@version)`
   `npm install jquery@version`
   `npm install popper@version`

   import to angular.json :

   "styles": [
   "node_modules/bootstrap/dist/css/bootstrap.min.css",
   "src/styles.css"
   ],
   "scripts": [
   "node_modules/jquery/dist/jquery.slim.min.js",
   "node_modules/popper.js/dist/umd/popper.min.js",
   "node_modules/bootstrap/dist/js/bootstrap.min.js"
   ]

4. Add Elf state management ( instead of Akita )
   `yarn add @ngneat/elf`
   `yarn add @ngneat/elf-devtools`
   `yarn add @ngneat/elf-entities`
   `yarn add @ngneat/elf-persist-state`
5. Add Spinner

- `yarn add ngx-spinner`
- Add `node_modules/ngx-spinner/animations/ball-scale-multiple.css`
  to `Styles` in `angular.json`
- Import NgxSpinnerModule in in the root module(AppModule) :

```typescript
@NgModule({
  imports: [
    // ...
    BrowserAnimationsModule,
    NgxSpinnerModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
```

- Add spinner: `<ngx-spinner></ngx-spinner>`

Ex: Usage

```typescript
ngOnInit() {
    /** spinner starts on init */
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);
  }
```

6. Add Chart

- Package :
  - "ng2-charts": "~2.4.2" ;
  - "@coreui/coreui": "~2.1.16" ;
  - "@coreui/coreui-plugin-chartjs-custom-tooltips": "^1.3.1"
- Import `ChartModule`

* Could not find a declaration file for module '@coreui/coreui/dist/js/coreui-utilities'. 'C:/Users/hao.do/Desktop/First-Angular-Project/angular-project-demo/node_modules/@coreui/coreui/dist/js/coreui-utilities.js' implicitly has an 'any' type.

- Solution;
  Create `src/global.d.ts`with declaration:

```typescript
declare module "@coreui/coreui-plugin-chartjs-custom-tooltips";
declare module "@coreui/coreui/dist/js/coreui-utilities";
```
